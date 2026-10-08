//This is a class that represents a story arc
export default class StoryArc {
    //This is the constructor to create new Arcs.
    //This will take the arc ID, name, and the description
    constructor(arcId, name, description){
       //will store the ID of the story arc
        this.arcId = arcId;
        //Stores the name of the story arc.
        this.name = name;

        //Stores the description of the story arc.
        this.description = description;

        //This will create and empty list to hold the reviews.
        this.reviews = [];

    }
    //This method will add a new review to the story arc.
    //as stated before it will be a comment and a rating from zero to ten
    addReview() {
        
    }
    //This method will return the description of the story arc
    getDescription() {

    }
    //This will return the name of the story arc
    getName(){

    }
    //This method will return the reviews of the story arc
    getReviews() {
    
    }
}