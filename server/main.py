from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import pickle

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Review(BaseModel):
    rating: int # 0-10
    text: str

class Arc(BaseModel):
    name: str
    avgRating: float
    reviews: list[Review]



default_db_arcs = {
    "rentarcinfinity": Arc(
        name="RAG Arc 893049013",
        avgRating=0,
        reviews=[Review(rating=0, text="nothing even happens")]
    ),
    "yourname": Arc(
        name="Your Name",
        avgRating=10,
        reviews=[Review(rating=10, text="unbelievable.")]
    )
}
if os.path.exists('arcdb.pkl'):
    with open('arcdb.pkl', "rb") as f:
        db_arcs = pickle.load(f)
else:
    db_arcs = default_db_arcs

def save_db():
    with open('arcdb.pkl', "wb") as f:
        pickle.dump(db_arcs, f)

PATH_PREFIX=""

@app.get(PATH_PREFIX+"/arc/{arc_name}")
async def getArc(arc_name: str):
    key = arc_name.lower()

    if key not in db_arcs:
        raise HTTPException(status_code=404, detail="Arc not found")

    return db_arcs[key]

@app.get(PATH_PREFIX+"/addReview/{arc_name}")
async def addArc(arc_name: str, name: str = "Unnamed Arc", rating: int = 10, reviewText: str = ""):
    key = arc_name.lower()
    if key not in db_arcs:
        raise HTTPException(status_code=404, detail="Arc not found")

    arc = db_arcs[key]

    review = Review(rating=rating,text=reviewText)

    #update average rating
    total_reviews = len(arc.reviews) + 1
    current_sum = arc.avgRating * len(arc.reviews)
    arc.avgRating = (current_sum + rating) / total_reviews

    arc.reviews.append(review)
    save_db()
    return arc

@app.post(PATH_PREFIX+"/rate/{arc_name}")
async def addRating(arc_name: str, rating: int = 10):
    key = arc_name.lower()
    if key not in db_arcs:
        raise HTTPException(status_code=404, detail="Arc not found")

    arc = db_arcs[key]

    #update average rating
    total_reviews = len(arc.reviews) + 1
    current_sum = arc.avgRating * len(arc.reviews)
    arc.avgRating = (current_sum + rating) / total_reviews
    arc.reviews.append(Review(rating=rating, text=""))
    save_db()
    return arc

