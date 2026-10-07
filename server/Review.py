from datetime import date, datetime, time
from pydantic import BaseModel,Field

class Review:
    reviewId : int
    text : str
    rating : int
    createdAt : datetime = Field(default_factory=datetime.now)
