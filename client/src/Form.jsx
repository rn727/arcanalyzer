import { useState } from "react";

const Form = () => {
  const [rating, setRating] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/rate/yourname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        arc_name: "yourname",
        rating: rating,
      })
    });

    const data = await response.json();

    console.log(data);
  };

  return <form onSubmit={handleSubmit}>

    <input type="radio" id="rating-one" name="rating" value="one" checked={rating === "one"} onChange={(event) => setRating(event.target.value)} />
    <label for="rating-one">One</label>

    <input type="radio" id="rating-two" name="rating" value="two" checked={rating === "two"} onChange={(event) => setRating(event.target.value)} />
    <label for="rating-two">Two</label>

    <input type="radio" id="rating-three" name="rating" value="three" checked={rating === "three"} onChange={(event) => setRating(event.target.value)} />
    <label for="rating-three">Three</label>

    <input type="radio" id="rating-four" name="rating" value="four" checked={rating === "four"} onChange={(event) => setRating(event.target.value)} />
    <label for="rating-four">Four</label>

    <input type="radio" id="rating-five" name="rating" value="five" checked={rating === "five"} onChange={(event) => setRating(event.target.value)} />
    <label for="rating-five">Five</label>

    <input type= 'submit' />
    <p className="subitted-text"></p>
  </form>;
};
export default Form;
