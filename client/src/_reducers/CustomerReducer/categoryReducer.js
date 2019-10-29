import * as types from "../../_actions/types";

const initialState = {
  category: null,
  categorys: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false
      };
    case types.GET_CATEGORYS:
      return {
        ...state,
        categorys: payload,
        loading: false
      };
    case types.ADD_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false
      };
    case types.SET_CURRENT_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case types.CLEAR_CATEGORY:
      return {
        ...state,
        category: null,
        categorys: [],
        loading: false
      };

    // case types.FILTER_STAFF:
    //   return {
    //     ...category,
    //     filtered: category.categorys.filter(category => {
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
    case types.DELETE_CATEGORY:
      return {
        ...state,
        categorys: state.categorys.filter(
          category => category._id !== action.payload
        ),
        loading: false
      };
    case types.CATEGORY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
