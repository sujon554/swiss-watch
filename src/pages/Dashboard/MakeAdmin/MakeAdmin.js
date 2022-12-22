import React from 'react';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://swess-server.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Admin added successfully!",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });

    e.preventDefault();
  };

  return (
    <Container>
      <h1>Make Admin</h1>
      <Form
        onSubmit={handleAdminSubmit}
        className="d-flex justify-content-center my-5"
      >

<Row>
        <Col sm={12} md={6}>
        <InputGroup className="mb-3 w-100">
          <FormControl required onBlur={handleOnBlur} placeholder="Enter E-mail" />
          
        </InputGroup>
        </Col>
        <Col sm={12} md={6}>
        <Button variant="success" type="submit">
            Make Admin
          </Button>
        </Col>
      </Row>

        
      </Form>
      

      
    </Container>
  );
};

export default MakeAdmin;