//This will be the rating class that will havbe the score/comments
export default class Rating {
    // This will create a rating with the 1-5 and a comment
    constructor(score, comment){
        //this will store the score of the rating
        this.score = score;

        //this will store the comment of the rating
        this.comment = comment;
    }

//This will display the infrmation above
displayRating() { // +public
}
//This will allow the website workers to review the comment
reviewComment() { // +public
}
}
