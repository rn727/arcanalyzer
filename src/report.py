from enum import Enum


class ReportStatus(Enum):
    PENDING = "PENDING"
    REMOVED = "REMOVED"
    DISMISSED = "DISMISSED"


class Report:

    def __init__(self, reportId, review, details, status, created):
        self._reportId = reportId
        self._review = review
        self._details = details
        self._status = status
        self._created = created

    def getReportId(self):
        return self._reportId

    def getReview(self):
        return self._review

    def getDetails(self):
        return self._details

    def getStatus(self):
        return self._status

    def getCreated(self):
        return self._created

    def remove(self):
        # Stubbed method that removes a flagrant review
        return None

    def dismiss(self):
        # Stubbed method that resolves a false report on a review that abides by the rules
        return None
