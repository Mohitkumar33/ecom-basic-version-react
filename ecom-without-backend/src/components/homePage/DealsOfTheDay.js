import React from "react";
import { Link } from "react-router-dom";
import "./dealsOfTheDay.css";
import { productsData } from "../../backend/db/productsData";

const DealsOfTheDay = () => {
  const maxDiscountProducts = productsData.filter((i) => i.discount >= 50);
  return (
    <>
      <h2>Deals of the Day</h2>
      <Link to="/products">
        <div className="card-4">
          {maxDiscountProducts.map((i) => (
            <div className="card-4-item" key={i._id}>
              <img src={i.image} alt={i.brand} />
              <p>{i.name}</p>
              <p>₹{i.mrp - (i.mrp * i.discount) / 100}</p>
              <button>Go to Cart</button>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

export { DealsOfTheDay };
