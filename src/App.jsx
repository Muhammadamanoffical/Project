/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { children } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/home/Home";
import Order from "./Pages/home/order/Order";
import Cart from "./Pages/home/cart/Cart";
import MyState from "./Context/data/myState";
import Login from "./Pages/home/registration/Login";
import Signup from "./Pages/home/registration/Signup";
import ProductInfo from "./Pages/home/productInfo/ProductInfo";
import AddProduct from "./Pages/home/admin/page/AddProduct";
import UpdateProduct from "./Pages/home/admin/page/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/home/admin/dashboard/Dashboard";
import Nonpage from "./Pages/home/nonpage/Nopage";
import AllProduct from "./Pages/home/allproduct/AllProduct";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<AllProduct />} />
            <Route
              path="/order"
              element={
                <ProtectedRoutes>
                  <Order />
                </ProtectedRoutes>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutesForAdmin>
                  <Dashboard />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <AddProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <UpdateProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/*" element={<Nonpage />} />
          </Routes>
          <ToastContainer />
        </Router>
      </MyState>
    </>
  );
}
export default App;
//user
export const ProtectedRoutes = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
//admin
export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "aman@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
