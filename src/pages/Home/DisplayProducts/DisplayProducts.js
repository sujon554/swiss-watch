import React, { useEffect, useState } from "react";
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("https://swess-server.onrender.com/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return (
    <Container className="my-5 mb-3 py-3">
      <h1 className="text-warning my-5">WATCHES</h1>
      <Row xs={1} md={3} className="g-4">
        {watches.slice(0, 6).map((watch) => (
          <Col key={watch._id} watch={watch}>
            <div>
              <Card.Img
                height="300"
                width="250"
                variant="top"
                src={watch.img}
              />
              <Card.Body>
                <Card.Title>{watch.name}</Card.Title>
                <h6 className="text-danger">Price: $ {watch.Price}</h6>
                <Card.Text>{watch.Description}</Card.Text>

                <Rating
                  initialRating={watch.star}
                  readonly
                  emptySymbol="far fa-star text-warning"
                  fullSymbol="fas fa-star text-warning"
                />
              </Card.Body>

              <Link to={`/singleproduct/${watch._id}`}>
                <Button className="px-5 py-2">Buy Now</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DisplayProducts;
