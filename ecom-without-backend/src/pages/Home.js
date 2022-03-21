import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import "./home.css";
import { DealsOfTheDay } from "../components/homePage/DealsOfTheDay";
import { Advertisements } from "../components/homePage/Advertisements";
import { Arrivals } from "../components/homePage/Arrivals";
import { GlobalContext } from "../contexts/Provider";
import * as ActionTypes from "../contexts/ActionTypes";
import { productsData } from "../backend/db/productsData";
import axios from "axios"

const Home = () => {
  const {dispatch} = useContext(GlobalContext)
  useEffect(()=>{
    (async ()=>{
      try{
        const response = await axios.get("/api/products")
        dispatch({type:ActionTypes.SET_PRODUCTS,payload:{products:response.data.products}})
      }catch(err){
        console.error(err)
        dispatch({type:ActionTypes.SET_PRODUCTS,payload:{products:productsData}})
      }
    })
  },[])
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
