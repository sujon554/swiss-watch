import Slider from "react-slick";
import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Container } from "react-bootstrap";
import "./reviews.css";
const Reviews = () => {
  const [reviews, setReview] = useState([]);

  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 4,
    speed: 500,
  };

  useEffect(() => {
    fetch("https://nameless-shelf-85993.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="review">
      <Container className="my-5">
        <h2 className="mb-5 text-">CLIENTS REVIEWS</h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="mx-2" key={review._id} review={review}>
              <h3>{review.UserName}</h3>
              <h6>{review.ReviewName}</h6>
              <Rating
                initialRating={review.watchRating}
                readonly
                emptySymbol="far fa-star text-warning"
                fullSymbol="fas fa-star text-warning"
              />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Reviews;
