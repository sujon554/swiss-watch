import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import about from "../../../src/images/about.jpg";

const Model = () => {
  return (
    <Container className="m-5">
      <h1 className="mb-4">About Us </h1>
      <Row>
        <Col md={6} sm={12}>
          <p>
            Most often associated with watches or timepieces made in
            Switzerland, Swiss law considers a watch to be Swiss made if its
            movement is Swiss, if the movement has been assembled in the Swiss
            region, its final inspection occurred in Switzerland, and at least
            60% of manufacturing costs are domestic.[3] Besides the "Swiss made"
            requirements, watches may carry the Swiss movement ("Swiss Movt")
            marker if at least half of the assembled parts are of Swiss
            manufacture.[3] In addition to "Swiss made" and "Swiss Movt", under
            Swiss law watches may carry the words "Suisse", "produit suisse",
            "fabriqué en Suisse", "qualité suisse" or simply the English
            translation, "Swiss".[3] Outside of the jurisdiction of Switzerland,
            the legal requirements for use of the term "Swiss made" may differ.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <Image className="img-fluid rounded" src={about} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Model;
