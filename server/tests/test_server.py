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



def test_rejects_review_over_500_characters():
    arc = main.db_arcs["yourname"]
    original_count = len(arc.reviews)
    original_average = arc.avgRating

    response = client.post(
        "/rate/yourname",
        params={"rating": 5, "text": "a" * 501}
    )

    assert response.status_code == 422
    assert len(arc.reviews) == original_count
    assert arc.avgRating == original_average


def test_accepts_review_of_exactly_500_characters():
    response = client.post(
        "/rate/yourname",
        params={"rating": 5, "text": "a" * 500}
    )

    assert response.status_code == 200
    assert response.json()["reviews"][-1]["text"] == "a" * 500

def test_report_endpoint_exists():
    response = client.post(
        "/report/yourname",
        params={
            "review_index": 0,
            "details": "Inappropriate content"
        }
    )
    assert response.status_code == 200

    