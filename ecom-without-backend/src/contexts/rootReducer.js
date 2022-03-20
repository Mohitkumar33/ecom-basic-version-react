import * as ActionTypes from "./ActionTypes";

const rootReducer = (state, { type, payload }) => {
  let products = state.products;
  let wishlist = state.wishlist;
  switch (type) {
    case ActionTypes.SET_DISCOUNT:
      products = state.products.filter(
        (product) => product.discount >= payload.discount
      );
      return { ...state, products: products };

    case ActionTypes.SET_PRICE:
      console.log(
        "filter --> ",
        state.products.filter(
          (product) =>
            product.mrp - (product.mrp * product.discount) / 100 <=
            payload.price
        )
      );
      products = state.products.filter(
        (product) =>
          product.mrp - (product.mrp * product.discount) / 100 <= payload.price
      );
      return { ...state, products: products };

    case ActionTypes.SET_RATING:
      products = state.products.filter(
        (product) => product.rating >= payload.rating
      );
      return { ...state, products: products };

    case ActionTypes.SET_SORTBY:
      if (payload.sort === "lth") {
        products = state.products.sort((a, b) => (a.mrp > b.mrp ? 1 : -1));
      } else products = state.products.sort((a, b) => (a.mrp > b.mrp ? -1 : 1));
      return { ...state, products };

    case ActionTypes.ADD_TO_WISHLIST: {
      products = products.map((product) =>
        product.temp_id === payload.temp_id
          ? { ...product, inWishlist: true }
          : product
      );
      wishlist = [...wishlist, products[payload.temp_id - 1]];
      return {
        ...state,
        products: products,
        wishlist: wishlist,
      };
    }

    case ActionTypes.REMOVE_FROM_WISHLIST: {
      products = products.map((product) =>
        product.temp_id === payload.temp_id
          ? { ...product, inWishlist: false }
          : product
      );
      wishlist = wishlist.filter((item) => item.temp_id !== payload.temp_id);
      return { ...state, products: products, wishlist: wishlist };
    }

    default:
      return state;
  }
};

export default rootReducer;
