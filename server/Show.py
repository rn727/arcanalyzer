from pydantic import BaseModel,Field
class Show:
    showId : int
    title : str
    description : str
    storyArcs : List[StoryArc]
    def getTitle() -> str:
        return self.title
    def getDescription() -> str:
        return self.description
    def getArcs() -> List[StoryArc]:
        return self.storyArcs
    def getEpisodes() -> List[Episodes]:
        return []
