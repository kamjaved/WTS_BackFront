import * as types from "../../_actions/types";

const initialState = {
  customerbranch: null,
  customerbranchs: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CUSTOMER_BRANCH:
      return {
        ...state,
        customerbranch: payload,
        loading: false
      };

    case types.ADD_CUSTOMER_BRANCH:
      return {
        ...state,
        customerbranch: payload,
        loading: false
      };

    case types.GET_CUSTOMER_BRANCHS:
      return {
        ...state,
        customerbranchs: payload,
        loading: false
      };

    case types.SET_CURRENT_CUSTOMER_BRANCH:
      return {
        ...state,
        customerbranch: action.payload
      };

    case types.CLEAR_CUSTOMER_BRANCH:
      return {
        ...state,
        customerbranch: null,
        customerbranchs: [],
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
    case types.DELETE_CUSTOMER_BRANCH:
      return {
        ...state,
        customerbranchs: state.customerbranchs.filter(
          com => com._id !== action.payload
        ),
        loading: false
      };
    case types.CUSTOMER_BRANCH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
