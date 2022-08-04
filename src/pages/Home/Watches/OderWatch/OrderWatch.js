import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import useAuth from "../../../../hooks/useAuth";

const OrderWatch = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`http://ancient-citadel-32341.herokuapp.com/watches/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  //Booking FORM Submit
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://ancient-citadel-32341.herokuapp.com/allorders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Package Booked Successfully!");
        }
      });
  };
 
  return (
    <Container >
      <Row className="py-5">
        <Col className="py-3">
          {/* Button */}
          <Link to="/watches">
            <Button>Back Watch Page</Button>
          </Link>
        </Col>
        <Col>
     
          <div className="mb-5">
            <Image className="img-fluid" src={singleProduct.img} alt="" />
            <h2 className="mt-5">Watch Name {singleProduct.name}</h2>
            <h1 className="my-3">Price: {singleProduct.Price}</h1>
            <p className="mb-5">{singleProduct.Description}</p>
          </div>
        </Col>
        <Col>
          {/* //order Now */}
          <div>
            <Form
              className="d-flex flex-column mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                style={{ outline: "none" }}
                className="mb-3 py-2 px-3"
                defaultValue={user.displayName}
                {...register("userName")}
              />
              <input
                style={{ outline: "none" }}
                className="mb-3 py-2 px-3"
                defaultValue={user.email}
                {...register("userEmail")}
              />
              {/* Error */}

              {singleProduct.name && (
                <input
                  style={{ outline: "none" }}
                  className="mb-3 py-2 px-3"
                  defaultValue={singleProduct.name}
                  {...register("singleWatchName")}
                />
              )}

              {singleProduct.img && (
                <input
                  className="mb-3 p-2 d-none"
                  defaultValue={singleProduct.img}
                  {...register("singleWatchImg")}
                />
              )}

              {singleProduct.Price && (
                <input
                  className="mb-3 p-2"
                  defaultValue={singleProduct.Price}
                  {...register("singleWatchPrice")}
                />
              )}

              {/* Error */}

              <input
                className="mb-3 p-2 d-none"
                defaultValue="Pending"
                {...register("bookedServiceStatus")}
              />

              <Button variant="warning" type="submit">
                Order Now
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderWatch;
