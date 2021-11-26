import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    axios
      .post("https://ancient-citadel-32341.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Review Post Successfully !");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div>
      <div className="pt-5">
        <h3 className="text-center text-dark mb-5 text-uppercase">
          Add a new <strong className="text-info">Review</strong>
        </h3>

        <Form
          className="d-flex flex-column w-25 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="mb-3 py-2 px-3"
            placeholder="Your Name"
            {...register("UserName")}
          />
          <textarea
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="mb-3 py-2 px-3"
            placeholder="Write your Review"
            {...register("ReviewName")}
          />

          <input
            style={{ outline: "none" }}
            onClick={successTextRemover}
            className="mb-3 py-2 px-3"
            placeholder="Rating (out of 5)"
            {...register("watchRating")}
          />

          <Button className="w-50" variant="success" type="submit">
            Add Review
          </Button>
        </Form>
        <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
          {success}
        </p>
      </div>
    </div>
  );
};

export default Review;
