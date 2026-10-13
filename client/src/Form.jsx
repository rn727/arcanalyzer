import { useState } from "react";

const Form = () => {
  const [rating, setRating] = useState(null); //changed to null*
  const [showReviewForm, setShowReviewForm] = useState(false);//
  const [comment, setComment] = useState("");//
  const[showReportForm, setShowReportForm] = useState(false);
  const[reportReason, setReportReason] = useState("");
  const[reportMessage, setReportMessage] = useState("");
  const[submittedReview, setSubmittedReview] = useState(null);

  const selectedSeason = {episodeStart: 1, episodeEnd: 12};// not set just example

  //not above 

  async function handleSubmit(event) {
    event.preventDefault();

    const newReview = {
      comment: comment, 
      rating: rating,
    };

    const response = await fetch("http://127.0.0.1:8000/rate/yourname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        arc_name: "yourname",
        comment: comment,
        rating: rating,
      })
    });

    const data = await response.json();

    console.log(data);

    setSubmittedReview(newReview);
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
      <article className="review-card"> 
        

      {/* the reveiw text is gonna be here. */}
      <p>Review comment goes here ex: This arc is good.</p>

      {/*the review will score it form zero to ten */}
      <strong> 5/10</strong>
      <button
      type="button"
      onClick={() => {
        setShowReportForm(true)
        setReportMessage("")
      }}
      >
        report
      </button>
      {/*this will be the box after the button is clicked */}
      {showReportForm &&(
        <div className="report-form">
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
         Submit Report
         </button>
         </div>
         )}
         {/* will show the submission message. */}
         {reportMessage &&( 
         <p role="status">{reportMessage}</p>
      
         )}




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
    </div>
      )}

      {/* will show the submitted review */}
      {submittedReview && (
        <div className="review-card">
          <p>{submittedReview.comment}</p>
          <strong>{submittedReview.rating}/10</strong>
        </div>
      )}
      </article>
    
      </section> 
      </div>
      
      {/*do not edit below ehre */}


  </form>;
  
};

export default Form;
