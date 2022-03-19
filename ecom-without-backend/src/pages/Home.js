import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import "./home.css";
import { DealsOfTheDay } from "../components/homePage/DealsOfTheDay";
import { Advertisements } from "../components/homePage/Advertisements";
import { Arrivals } from "../components/homePage/Arrivals";
const Home = () => {
  return (
    <>
      <Navbar />
      <DealsOfTheDay/>
      <Advertisements/>
      <Arrivals/>
      <Footer />
      {/* <Link to="/">Home</Link>||
      <Link to="/products">products</Link>||
      <Link to="/wishlist">wishlist</Link>||
      <Link to="/cart">Cart</Link>||
      <Link to="/login">Login</Link>||
      <Link to="/signup">Signup</Link> */}
    </>
  );
};

export { Home };
