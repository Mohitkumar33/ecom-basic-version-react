import React, { createContext, useReducer } from "react";
import rootReducer from "./rootReducer";
// import { productsData } from "../backend/db/productsData";

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
  filters: {
    male: true,
    female: true,
    price: 5000,
    rating: 0,
    discount: 0,
    summer: true,
    winter: true,
    
  },
};
export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
