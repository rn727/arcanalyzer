import { useEffect, useState} from "react";

const Form = () => {
  const [rating, setRating] = useState(null); //changed to null*
  const [showReviewForm, setShowReviewForm] = useState(false);//
  const [comment, setComment] = useState("");//
  const[showReportForm, setShowReportForm] = useState(false);
  const[reportReviewIndex, setReportReviewIndex] = useState(null);// will have each comment have a report next to them
  const[reportReason, setReportReason] = useState("");
  const[reportMessage, setReportMessage] = useState("");
  const[reviews, setReviews] = useState([]);
 
  const selectedSeason = {episodeStart: 1, episodeEnd: 12};// not set just example
  useEffect(() => {
    //This will ask the backend for the reviews and show them on the page
    async function loadReviews() {
      try {
        //This will be an example
        const response = await fetch("http://127.0.0.1:8000/arc/yourname"); // This here is what is sending the arc reviews to the backend
        //This will stop if the back end gets an error
        if (!response.ok) {
          console.error("Was not able to load reviews:", response.statusText);
          return;
        }
        //Will help convert the backend into an something that can be displayed
        const arc = await response.json();
        //will store the reviews so that it can be displayed
        setReviews(arc.reviews);
      } catch (error) {
        //this will run if the backend is not reached
        console.error("Not able to reach the backend:", error);
      }
      }
      //runs the function to load reviews
      loadReviews();
  }, []); //This will run as soon as the page appears 


  //not above 

  async function handleSubmit(event) {
    event.preventDefault();

    const params = new URLSearchParams({
      rating: String(rating),
      text: comment,
    });

    const response = await fetch(
      "http://127.0.0.1:8000/rate/yourname?" + params.toString(),
      {method: "POST"}
    );
    if (!response.ok) {
      console.error("Review submission failed:", response.statusText);
      return;
    }

    const data = await response.json();

    console.log(data);

    setReviews(data.reviews);
    setComment("");
    setRating(null);
    setShowReviewForm(false);
  };
  //end of fix
  
  //When the form is submmited this will run
  return <form onSubmit={handleSubmit}>


  {/*Will be the name of the website and rating input */}
    <h1>ArcAnalyzer</h1>
    {/*do not edit above here */}
     
    <div className="content-layout">
      {/*this will make it on the left side title and summart and image*/}
      <section className="show-heading">
        <h2>Show Example</h2>
      <div className="show-image">show image </div>
      <p>Short description of the show.</p>
      
    </section>

    {/* this will make the ar cname on the right as long wiht the episdoe range and reviews*/}
    <section className="reviews-section">

      <h2>
        Name of the Arc
      </h2>

      <h3>
      Episodes in Arc {selectedSeason.episodeStart} - {selectedSeason.episodeEnd}
      </h3>

      {/* Groups of the episdoe ranges in the seasons. */}
      <article> 
        

      {/* the reveiw text is gonna be here. */}
      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <p>{review.text}</p>
          <strong>{review.rating}/10</strong>
          <button
          type="button"
          onClick={() => {
            setReportReviewIndex(index);
            setShowReportForm(true);
            setReportMessage("");
          }}
          >
            Report
          </button>
        </div>
      ))}

      {/*this will be the box after the button is clicked */}
      {showReportForm &&(
        <div className="report-form">
          <p>Reporting: {reviews[reportReviewIndex]?.text}</p> {/*as it has no fucntion for right now the other team can build off it */}
          <label htmlFor="report-reason">What is the reason for this report?</label>
          <textarea
          id="report-reason"
          value={reportReason}
          onChange={(event) => setReportReason(event.target.value)}
         />
         {/* this will display a message that the report has been submitted */}
         <button
         type="button"
         onClick={() => {
          if (reportReason.trim()){
            setReportMessage("Report has been submitted.");
            setReportReason("");
            setShowReportForm(false);
          }else{
            setReportMessage("please give a reason why it is inappropriate");
          }
        }}
         >
          {/* allows to cancel the report */}
         Submit Report
         </button>
         <button
          type="button"
          onClick={() => {
            setShowReportForm(false);
            setReportReason("");
            setReportMessage("");
            setReportReviewIndex(null);
          }}
         >
          Cancel
         </button>
         </div>
         )}
         {/* will show the submission message. */}
         {reportMessage &&( 
         <p role="status">{reportMessage}</p>
         )}
         </article>




      {/*This button will apprea on the card; it will report soon. */}
      <button
      type="button"
      onClick={() => setShowReviewForm(true)}
    >
      Create a Review
      </button>

      {/* this will be showed once a person clicks the button */}
      {showReviewForm && (
      <div className="new-review-form">
      {/* tells them to type there review */}
      <label htmlFor="review-comment">write here</label>
      <textarea
      id="review-comment"
      value={comment}
      onChange={(event) => setComment(event.target.value)}
      required
      />
      {/*Now this will be hte numbers 0-10 as it is asked for.*/}
      <label htmlFor="review-rating">Rating (0-10)</label>
      <input
      type="number"
      step="1"
      id="review-rating"
      min="0"
      max="10"
      value={rating ?? ""}
      onChange={(event) =>
      setRating(
        event.target.value === "" ? null : Number(event.target.value)
      )
    }
    required
    />
    <button type="submit">Submit Review</button> {/* will be the to submit the review */}
    <button type="button" onClick={() => {
      setShowReviewForm(false);
      setComment("");
      setRating(null);
    }}>
      Cancel
    </button>
    </div>
      )}

      
    
      </section> 
      </div>
      
      {/*do not edit below ehre */}


  </form>;
  
};

export default Form;
