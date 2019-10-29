import * as types from "../../_actions/types";

const initialState = {
  product: null,
  products: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case types.ADD_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case types.SET_CURRENT_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case types.CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
        products: [],
        loading: false
      };

    // case types.FILTER_STAFF:
    //   return {
    //     ...product,
    //     filtered: product.products.filter(product => {
    //       const regex = new RegExp(`${action.payload}`, "gi");
    //       return (
    //         staff.firstName.match(regex) ||
    //         staff.lastName.match(regex) ||
    //         staff.email.match(regex) ||
    //         staff.mobile.match(regex) ||
    //         staff.username.match(regex)
    //       );
    //     })
    //   };
    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          product => product._id !== action.payload
        ),
        loading: false
      };
    case types.PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
