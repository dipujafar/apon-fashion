import { useEffect, useState } from "react";
import CustomerReview from "./CustomerReview";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/client.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-10 bg-gray-100 rounded pt-4">
      <h1
        className="text-center text-4xl text-orange-400 mb-5"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        Customer Reviews
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-2">
        {reviews.map((review) => (
          <CustomerReview key={review.id} review={review}></CustomerReview>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
