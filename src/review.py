class Review:

    def __init__(self, reviewId, text, rating, created, flagged):
        self._reviewId = reviewId
        self._text = text
        self._rating = rating
        self._created = created
        self._flagged = flagged

    def getReviewId(self):
        return self._reviewId

    def getText(self):
        return self._text

    def getRating(self):
        return self._rating

    def getCreated(self):
        return self._created

    def isFlagged(self):
        return self._flagged

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
