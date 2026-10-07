from pydantic import BaseModel,Field
from StoryArc import StoryArc
class Show:
    showId : int
    title : str
    description : str
    storyArcs : List[StoryArc]
