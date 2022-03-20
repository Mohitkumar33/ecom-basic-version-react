import React, { useContext } from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import "./wishlist.css";
import { GlobalContext } from "../contexts/Provider";

const Wishlist = () => {
  const { state } = useContext(GlobalContext);
  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h2 className="main-h2">My Wishlist</h2>
        <div className="all-products">
          {state.wishlist.length !== 0 ? (
            state.wishlist.map((item) => {
              return (
                <div className="card-1">
                  <img src={item.image} alt={`${item.name}-${item.id}`} />
                  <p>{item.name}</p>
                  <p>{item.mrp - (item.mrp * item.discount) / 100}</p>
                  <button>Go to Cart</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="card-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              );
            })
          ) : (
            <span>Nothing in wish list</span>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Wishlist };
