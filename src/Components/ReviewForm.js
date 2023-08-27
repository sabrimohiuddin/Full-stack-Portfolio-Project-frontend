import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ReviewForm(props) {
  let { id } = useParams(); // Assuming this is the product ID
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    rating: 1,
    comment: '',
    product_id: id,
  });

  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setReview({ ...review, [id]: value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview({
        ...reviewDetails,
        rating: reviewDetails.rating || 1,
        comment: reviewDetails.comment || ''
      });
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReview({
      rating: 1,
      comment: '',
      product_id: id,
    });
  };

  return (
    <form className="form-inline addReview" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={handleTextChange}
          required
        />
      </div>

      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          placeholder="Share your thoughts..."
          value={review.comment}
          onChange={handleTextChange}
        />
      </div>

      <input className="btn btn-primary mb-2" type="submit" />
    </form>
  );
}

export default ReviewForm;


