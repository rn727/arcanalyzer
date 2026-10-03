import pytest
from fastapi.testclient import TestClient

import main
from main import Arc, Review

client = TestClient(main.app)


@pytest.fixture(autouse=True)
def fresh_db(monkeypatch):
    # Isolate each test: fresh in-memory DB, and never write arcdb.pkl.
    monkeypatch.setattr(main, "db_arcs", {
        "yourname": Arc(name="Your Name", avgRating=10, reviews=[Review(rating=10, text="unbelievable.")]),
    })
    monkeypatch.setattr(main, "save_db", lambda: None)


def test_add_rating_updates_average_and_appends_review():
    r = client.post("/rate/yourname", params={"rating": 4})
    assert r.status_code == 200
    body = r.json()
    assert body["avgRating"] == 7
    assert body["reviews"][-1] == {"rating": 4, "text": ""}
    assert len(main.db_arcs["yourname"].reviews) == 2


def test_add_rating_is_case_insensitive():
    assert client.post("/rate/YourName", params={"rating": 0}).json()["avgRating"] == 5


def test_add_rating_defaults_to_10():
    body = client.post("/rate/yourname").json()
    assert body["avgRating"] == 10
    assert body["reviews"][-1]["rating"] == 10


def test_add_rating_unknown_arc_404():
    r = client.post("/rate/nope", params={"rating": 5})
    assert r.status_code == 404
    assert r.json()["detail"] == "Arc not found"


def test_add_rating_rejects_non_int():
    assert client.post("/rate/yourname", params={"rating": "abc"}).status_code == 422
