import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Contacts from "./pages/Contacts/Contacts";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import OrderWatch from "./pages/Home/Watches/OderWatch/OrderWatch";
import Watches from "./pages/Home/Watches/Watches";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Login/Register";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Model from "./pages/Model/Model";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/contacts">
              <Contacts></Contacts>
            </Route>

            <Route path="/model">
              <Model></Model>
            </Route>

            <PrivateRoute path="/singleproduct/:id">
              <OrderWatch></OrderWatch>
            </PrivateRoute>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/watches">
              <Watches></Watches>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
