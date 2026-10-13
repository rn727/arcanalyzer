# Review class
class Review:

    def __init__(self, text, rating):
        self.reviewID = 0
        self.text = text
        self.rating = rating
        self.created = ""
        self.flagged = False

    # getters
    def getReviewID(self):
        return self.reviewID

    def getText(self):
        return self.text

    def getRating(self):
        return self.rating

    def getCreated(self):
        return self.created

    def isFlagged(self):
        return self.flagged

    def remove(self):
        # TODO
        pass

    def submitReport(self, details):
        # TODO
        pass
