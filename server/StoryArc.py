from pydantic import BaseModel,Field
from Review import Review
from Episode import Episode
class StoryArc:
    arcId : int
    name : str
    description : str
    reviews : List[Review]
    episodes : List[Episode]
