from Show import Show
from pydantic import BaseModel,Field
class ShowCatalog:
    shows : List[Show]
    def listAll() -> List[Show]:
        return self.shows
    def search(title : str) -> List[Show]:
        return []
