import * as types from "../../_actions/types";

const initialState = {
  supplierbranch: null,
  supplierbranchs: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SUPPLIER_BRANCH:
      return {
        ...state,
        supplierbranch: payload,
        loading: false
      };

    case types.ADD_SUPPLIER_BRANCH:
      return {
        ...state,
        supplierbranch: payload,
        loading: false
      };

    case types.GET_SUPPLIER_BRANCHS:
      return {
        ...state,
        supplierbranchs: payload,
        loading: false
      };

    case types.SET_CURRENT_SUPPLIER_BRANCH:
      return {
        ...state,
        supplierbranch: action.payload
      };

    case types.CLEAR_SUPPLIER_BRANCH:
      return {
        ...state,
        supplierbranch: null,
        supplierbranchs: [],
        loading: false
      };
    // case types.FILTER_STAFF:
    //   return {
    //     ...state,
    //     filtered: state.states.filter(state => {
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
    case types.DELETE_SUPPLIER_BRANCH:
      return {
        ...state,
        supplierbranchs: state.supplierbranchs.filter(
          com => com._id !== action.payload
        ),
        loading: false
      };
    case types.SUPPLIER_BRANCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
