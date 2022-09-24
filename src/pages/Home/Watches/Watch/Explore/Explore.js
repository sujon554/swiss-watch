import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
// import SingleExplore from '../SingeEpore/SingleExplore';

const Explore = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("https://nameless-shelf-85993.herokuapp.com/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {watches.map((watch) => (
          <Col key={watch._id} watch={watch}>
            <div>
              <Card.Img
                variant="top"
                height="300"
                width="250"
                src={watch.img}
              />
              <Card.Body>
                <Card.Title>{watch.name}</Card.Title>
                <h6>Price: $ {watch.Price}</h6>
                <Card.Text>{watch.Description}</Card.Text>

                <Rating
                  initialRating={watch.star}
                  readonly
                  emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                />
              </Card.Body>

              <Link to={`/singleproduct/${watch._id}`}>
                <Button className="px-5 py-2">Details</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;
