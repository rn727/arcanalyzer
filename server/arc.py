from pydantic import BaseModel
from review import Review
class Arc(BaseModel):
    arcId : int
    name: str
    description : str
    avgRating: float
    reviews: list[Review]
    episodes : List[Episode]
