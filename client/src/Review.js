//This will store reviews for the story arc
export default class Review {
    //This constructor will create new reviews
    //There will be a text and the rating is form zero to ten
    constructor(text, rating) {
        //This will store the reviewers ID
        //It will be set to later but for now it is null
        this.reviewId = null;

        //This will store the text of the review
        this.text = text;

        //This will store the rating of the review
        this.rating = rating; // Must be from zero to ten
        
        //This will keep records of date and time review are created
        this.createdAt = new Date();

        this.isFlagged = false;
    }
    //this method is going to return the text of the review
    getText() {

    }
    getReviewId() {
        
    }
    
    //This method will retun rating
    getRating() {

    }
    //This method will return the date and time
    getCreatedAt() {
    }
    //this method will see if what is asked is true to be flagged
    getIsFlagged() {
        return this.isFlagged;
    }
     //This method will mark as flagged
     //This will be flagged for viwers to see but will be storerd 
    markFlagged() {
        this.isFlagged = true;
    }
}
