import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import YourOrders from "../YourOrders/YourOrders";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageWatch from "../ManageWatch/ManageWatch";
import Orders from "../Orders/Orders";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h1 className="text-center mt-3 mb-3  text-uppercase display-6">
          dash<strong className="text-info">board</strong>
        </h1>
      </div>
      <hr className="new" />
      <Container className="mt-4 mb-5 pb-5">
        <Row>
          <Col sm={2} xl={2} lg={2}>
            <div className="pt-5 px-2">
              <Nav className="d-grid me-auto">
                <NavLink
                  className="mb-3 dashboard text-decoration-none"
                  to={`${url}/yourorders`}
                >
                  Your Orders
                </NavLink>

                <NavLink
                  className=" mb-3 dashboard text-decoration-none"
                  to={`${url}/payment`}
                >
                  Payment
                </NavLink>

                <NavLink
                  className=" mb-3 dashboard text-decoration-none"
                  to={`${url}/addreview`}
                >
                  Add Review
                </NavLink>

                {admin && (
                  <Nav>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/addnewproduct`}
                    >
                      Add New Product
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/manageallorders`}
                    >
                      Manage All Orders
                    </NavLink>
                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/manageallproducts`}
                    >
                      Manage All Watchs
                    </NavLink>

                    <NavLink
                      className=" mb-3 dashboard text-decoration-none"
                      to={`${url}/makeadmin`}
                    >
                      Make Admin
                    </NavLink>
                  </Nav>
                )}

                <NavLink
                  onClick={logOut}
                  className=" mb-3 text-decoration-none"
                  to="/home"
                >
                  <Button size="sm" variant="warning mt-3 px-4">
                    Log Out
                  </Button>
                </NavLink>
              </Nav>
            </div>
          </Col>
          <Col sm={10} xl={10} lg={10}>
            <div className="menubar px-5 w-100">
              <Switch>
                <Route exact path={path}>
                  <YourOrders></YourOrders>
                </Route>

                <Route exact path={`${path}/yourorders`}>
                  <YourOrders></YourOrders>
                </Route>

                <Route path={`${path}/addreview`}>
                  <Review></Review>
                </Route>

                <Route path={`${path}/payment`}>
                  <Payment></Payment>
                </Route>

                <Route path={`${path}/addnewproduct`}>
                  <AddNewProduct></AddNewProduct>
                </Route>

                <Route path={`${path}/manageallproducts`}>
                  <ManageWatch></ManageWatch>
                </Route>

                <Route path={`${path}/manageallorders`}>
                  <Orders></Orders>
                </Route>

                <Route path={`${path}/makeadmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
