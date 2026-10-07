from datetime import date, datetime, time
from pydantic import BaseModel,Field

class Show:
    showId : int
    title : str
    description : str
    seasons : List[Season]
    storyArcs : List[StoryArc]

class Season:
    seasonId : int
    seasonNumber : int
    episodes : List[Episode]

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
