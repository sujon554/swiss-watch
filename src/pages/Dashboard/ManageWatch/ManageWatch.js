import React from "react";
import { useEffect, useState } from "react";
import { Container, Button, Row, Table } from "react-bootstrap";

const ManageWatch = () => {
  const [watches, setWatches] = useState([]);
  // const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch("https://swess-server.onrender.com/watches")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  //   /Delete Orders
  const deleteHandler = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this Watch?"
    );
    if (proceed) {
      fetch(`https://swess-server.onrender.com/watches/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingWatches = watches.filter(
              (watch) => watch._id !== id
            );

            setWatches(remainingWatches);
          }
        });
    }
  };

  return (
    <Container>
      <h1>
        Manage <strong className="text-info">All Watches</strong>
      </h1>
      <h3>Total All Orders {watches.length}</h3>
      <Row className="g-5">
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>Watch Name</th>
              <th>Watch Price</th>
              <th>Ratings</th>
              <th>Watch Cancel</th>
            </tr>
          </thead>
          <tbody>
            {watches.map((watch) => (
              <tr>
                <td>{watch.name}</td>
                <td>{watch.Price}</td>
                <td>
                  {watch.star} <i className="text-warning fas fa-star"></i>{" "}
                </td>
                <td>
                  <Button
                    className="bg-danger"
                    onClick={() => deleteHandler(watch._id)}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ManageWatch;
