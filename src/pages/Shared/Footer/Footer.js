import React from 'react';
import { Col, Container, Row } from "react-bootstrap";


import payment from '../../../images/payemt.JPG'
const Footer = () => {
    return (
      <div className="bg-dark text-white py-5">
        <Container>
          <Row className="text-start">
            <Col>
              <h3>Contact</h3>
              <p>Address: 1216 Mirpur, Dhaka</p>
              <p>E-mail: contacts@gmail.com</p>
              <h6>+880152222222</h6>
              <br />
              <img src={payment} alt="" />
            </Col>
            <Col>
              <h3>About Us</h3>
              <h6>Give $50 get $55</h6>
              <h6>Gift Card</h6>
              <h6>Our Story</h6>
              <h6>Partners</h6>
              <h6>Careers</h6>
              <h6>Affiliate Program</h6>
            </Col>
            <Col>
              <h3>Help</h3>
              <h6>FAQs</h6>
              <h6>Delivery</h6>
              <h6>Payment</h6> <br />
              <h6>___________________</h6>
              <h3>Follow Us</h3>
              <div className="fs-3 m-2">
                <i className="fab fa-facebook"></i>
                <i className="fab m-2 fa-twitter"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab m-2 fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </Col>
            <Col>
              <h2>Quick Links</h2>
              <h6>How to Buy</h6>
              <h6>Payments</h6>
              <h6>Delivery</h6>
              <h6>Gift Receipt</h6>
              <h6>Recalled Item</h6>
              <h6>My Account</h6>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;