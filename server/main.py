from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Review(BaseModel):
    rating: int # 0-10
    text: str

class Arc(BaseModel):
    name: str
    avgRating: float
    reviews: list[Review]

db_arcs = {
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

    return arc
