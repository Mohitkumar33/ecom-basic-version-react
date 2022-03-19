import { createContext, useContext, useReducer } from "react";

const filterProducts = createContext(null);
const reducerFunc = (state,action)=>{
    return action;
}

const FilterProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducerFunc,{
        priceRange:5000,
        men:null,
        women:null,
        summer:null,
        winter:null,
        sortByPrice:null,
        rating:null,
        discount:null,
        wishlist:[],
        cart:[],
    })
    return(
        <filterProducts.Provider value={{state,dispatch}}>
            {children}
        </filterProducts.Provider>
    )
}

const useFilters = ()=>useContext(filterProducts);

export {FilterProvider,useFilters}
