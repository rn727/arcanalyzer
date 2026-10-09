# Note: Do not import this
raise Exception('Deprecated, please import the individual class in its own individual file')
from datetime import date, datetime, time
from pydantic import BaseModel,Field

class Show:
    showId : int
    title : str
    description : str
    storyArcs : List[StoryArc]

class StoryArc:
    arcId : int
    name : str
    description : str
    reviews : List[Review]
    episodes : List[Episode]

class Review:
    reviewId : int
    text : str
    rating : int
    createdAt : datetime = Field(default_factory=datetime.now)

Class Episode:
    episodeId : int
    title : str
    episodeNumber : int
