from pydantic import BaseModel,Field


class Episode:
    episodeId : int
    title : str
    episodeNumber : int
