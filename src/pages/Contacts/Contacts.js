import React from "react";
import { Button } from "react-bootstrap";
import "./Contacts.css";
const Contacts = () => {
  return (
    <div className="container my-5">
      <div className="contacts-container">
        <div className="contacts">
          <h1>Contacts Us</h1>
          <p>
            {" "}
            <input className="w-50 p-2" placeholder="Enter Name" type="text" />
          </p>
          <p>
            {" "}
            <input className="w-50 p-2" placeholder="Enter Mail" type="mail" />
          </p>
          <p>
            {" "}
            <input className="w-50 p-2" placeholder="Subject" type="text" />
          </p>
          <textarea
            className="p-2"
            placeholder="Type your Messese here..."
            id=""
            cols="45"
            rows="10"
          ></textarea>{" "}
          <br />
          <Button className="btn-primary p-3 px-5">Send</Button>
        </div>
        <div className="office">
          <h1>Our Office</h1>
          <p>
            We are egarly wants to meet with you. You are most welcome to visit
            our office. We are just offering you to drink a cup of tea with us.
            Thank You
          </p>
          <h3>Address</h3>
          <p>
            184, Senpara Parbata, Razia Plaza, 4th floor, Mirpur-10, Dhaka-1216,
            Bangladesh
          </p>
          <h3>Phone number:</h3>
          <p>02-9032597</p>
          <p>+88-01711927829</p>
          <p>+88-01971927829</p>
          <h3>E-mail</h3>
          <p>info@nebulas-it.com</p>
          <p>nebulasbd@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
