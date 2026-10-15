import { afterEach, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../src/Form.jsx'

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

test('submits the rating and review text as URI parameters', async () => {
  const fetchMock = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ reviews: [] }) })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ reviews: [{ rating: 4, text: 'Fun & surprising' }] }) })
  vi.stubGlobal('fetch', fetchMock)
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  await user.type(screen.getByLabelText('write here'), 'Fun & surprising')
  await user.type(screen.getByLabelText('Rating (0-10)'), '4')
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(fetchMock).toHaveBeenCalledTimes(2)
  expect(fetchMock).toHaveBeenNthCalledWith(1, 'http://127.0.0.1:8000/arc/yourname')
  const [requestUrl, options] = fetchMock.mock.calls[1]
  const url = new URL(requestUrl)
  expect(options.method).toBe('POST')
  expect(url.pathname).toBe('/rate/yourname')
  expect(url.searchParams.get('rating')).toBe('4')
  expect(url.searchParams.get('text')).toBe('Fun & surprising')
  expect(await screen.findByText('Fun & surprising', { selector: 'p' })).toBeTruthy()
})

test.each([
  ['empty review', '', '4'],
  ['empty rating', 'Good arc', ''],
  ['rating above 10', 'Good arc', '11'],
])('does not submit an %s', async (_case, comment, rating) => {
  const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ reviews: [] }) })
  vi.stubGlobal('fetch', fetchMock)
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  if (comment) await user.type(screen.getByLabelText('write here'), comment)
  if (rating) await user.type(screen.getByLabelText('Rating (0-10)'), rating)
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(fetchMock).toHaveBeenCalledOnce()
  expect(fetchMock).toHaveBeenCalledWith('http://127.0.0.1:8000/arc/yourname')
})

test('keeps the review available when the server rejects it', async () => {
  const fetchMock = vi.fn()
    .mockResolvedValueOnce({ ok: true, json: async () => ({ reviews: [] }) })
    .mockResolvedValueOnce({ ok: false, statusText: 'Bad Request', json: async () => ({ detail: 'Failed' }) })
  vi.stubGlobal('fetch', fetchMock)
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
  const user = userEvent.setup()
  render(<Form />)

  await user.click(screen.getByRole('button', { name: 'Create a Review' }))
  await user.type(screen.getByLabelText('write here'), 'Keep this text')
  await user.type(screen.getByLabelText('Rating (0-10)'), '4')
  await user.click(screen.getByRole('button', { name: 'Submit Review' }))

  expect(fetchMock).toHaveBeenCalledTimes(2)
  expect(fetchMock).toHaveBeenLastCalledWith(expect.stringContaining('/rate/yourname?'), { method: 'POST' })
  expect(consoleError).toHaveBeenCalledExactlyOnceWith('Review submission failed:', 'Bad Request')
  expect(screen.getByLabelText('write here').value).toBe('Keep this text')
  expect(screen.getByLabelText('Rating (0-10)').value).toBe('4')
  expect(screen.queryByText('Keep this text', { selector: 'p' })).toBeNull()
})
