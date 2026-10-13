from datetime import date, datetime, time
from pydantic import BaseModel,Field

class Review:
    reviewId : int
    test : str
    rating : int
    created : datetime = Field(default_factory=datetime.now)
    flagged : bool

    def remove(self):
        # void method that will interact with Report class later on
        return None

    def submitReport(self, details):
        # will need to call the constructor of the Report class later
        if not details:
            raise ValueError("Report details cannot be empty")
        if self._flagged:
            raise ValueError("Cannot report a flagged review")
        return {"reviewId": self._reviewId, "details": details}
