import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    axios
      .post("https://nameless-shelf-85993.herokuapp.com/watches", data)
      .then((res) => {
        if (res.data.insertedId) {
          // alert("Package Addeded Successfully!");
          reset();
          setSuccess("Watch Added Successfully !");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div className="pt-5">
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add a new <strong className="text-info">Watch</strong>
      </h3>

      <Form
        className="d-flex flex-column w-100 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Watch Name"
          {...register("name")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("img")}
        />

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="About"
          {...register("Description")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="$ Price"
          {...register("Price")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Rating (out of 5)"
          {...register("star")}
        />

        <Button className="w-50" variant="success" type="submit">
          Add Watch
        </Button>
      </Form>
      <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default AddNewProduct;
