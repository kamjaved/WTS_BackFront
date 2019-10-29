import * as types from "../../_actions/types";

const initialState = {
  productdetail: null,
  productdetails: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_BRANCH:
      return {
        ...state,
        productdetail: payload,
        loading: false
      };
    case types.GET_PRODUCT_BRANCHS:
      return {
        ...state,
        productdetails: payload,
        loading: false
      };
    case types.ADD_PRODUCT_BRANCH:
      return {
        ...state,
        productdetail: payload,
        loading: false
      };
    case types.SET_CURRENT_PRODUCT_BRANCH:
      return {
        ...state,
        productdetail: action.payload
      };
    case types.CLEAR_PRODUCT_BRANCH:
      return {
        ...state,
        productdetail: null,
        productdetails: [],
        loading: false
      };

    // case types.FILTER_STAFF:
    //   return {
    //     ...productdetail,
    //     filtered: productdetail.productdetails.filter(productdetail => {
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
    case types.DELETE_PRODUCT_BRANCH:
      return {
        ...state,
        productdetails: state.productdetails.filter(
          productdetail => productdetail._id !== action.payload
        ),
        loading: false
      };
    case types.PRODUCT_BRANCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
