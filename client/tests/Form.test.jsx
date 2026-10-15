import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../src/Form.jsx'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

test('submits the rating and review text as URI parameters', async () => {
  const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({}) })
  vi.stubGlobal('fetch', fetchMock)
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  await user.type(screen.getByLabelText('write here'), 'Fun & surprising')
  await user.type(screen.getByLabelText('Rating (0-10)'), '4')
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(fetchMock).toHaveBeenCalledOnce()
  const [requestUrl, options] = fetchMock.mock.calls[0]
  const url = new URL(requestUrl)
  expect(options.method).toBe('POST')
  expect(url.pathname).toBe('/rate/yourname')
  expect(url.searchParams.get('rating')).toBe('4')
  expect(url.searchParams.get('text')).toBe('Fun & surprising')
})

test.each([
  ['empty review', '', '4'],
  ['empty rating', 'Good arc', ''],
  ['rating above 10', 'Good arc', '11'],
])('does not submit an %s', async (_case, comment, rating) => {
  const fetchMock = vi.fn()
  vi.stubGlobal('fetch', fetchMock)
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  if (comment) await user.type(screen.getByLabelText('write here'), comment)
  if (rating) await user.type(screen.getByLabelText('Rating (0-10)'), rating)
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(fetchMock).not.toHaveBeenCalled()
})

test('keeps the review available when the server rejects it', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, json: async () => ({ detail: 'Failed' }) }))
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  await user.type(screen.getByLabelText('write here'), 'Keep this text')
  await user.type(screen.getByLabelText('Rating (0-10)'), '4')
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(screen.getByLabelText('write here').value).toBe('Keep this text')
  expect(screen.getByLabelText('Rating (0-10)').value).toBe('4')
  expect(screen.queryByText('Keep this text', { selector: 'p' })).toBeNull()
})
