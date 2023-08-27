import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review';
import ReviewForm from './ReviewForm';

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState(null);
  let { id } = useParams(); // Assuming this is the product ID




  const handleAdd = (newReview) => {
    console.log("Adding new review:", newReview);
    axios
      .post(`${API}/products/${id}/reviews`, newReview)
      .then((response) => {
        console.log("Response data:", response.data);
        setReviews([response.data, ...reviews]);
      })
      .catch((error) => console.warn('API Error:', error));
  };
  





  const handleDelete = (reviewId) => {
    axios
      .delete(`${API}/products/${id}/reviews/${reviewId}`)
      .then((response) => {
        const updatedReviews = reviews.filter((review) => review.id !== reviewId);
        setReviews(updatedReviews);
      })
      .catch((error) => console.warn('catch', error));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/products/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const updatedReviews = reviews.map((review) =>
          review.id === updatedReview.id ? response.data : review
        );
        setReviews(updatedReviews);
      })
      .catch((error) => console.warn('catch', error));
  };

  useEffect(() => {
    axios.get(`${API}/products/${id}/reviews`).then((response) => {
      if (Array.isArray(response.data)) {
        setReviews(response.data);
      } else {
        console.warn('Response data is not an array:', response.data);
      }
    });
  }, [id, API]);

  return (
    <section className="Reviews">
      <h3>Add a New Review</h3>
      <ReviewForm handleSubmit={handleAdd} />
      <h2>Reviews ({reviews ? reviews.length : 0})</h2>
      {reviews &&
        reviews.map((review) => (
          <Review
            key={review.id}  // Make sure each child in the list has a unique "key" prop
            review={review}
            handleSubmit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
    </section>
  );
}

export default Reviews;
