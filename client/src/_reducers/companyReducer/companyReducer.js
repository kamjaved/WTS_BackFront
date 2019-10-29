import * as types from "../../_actions/types";

const initialState = {
  company: null,
  companys: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_COMPANY:
      return {
        ...state,
        company: payload,
        loading: false
      };

    case types.ADD_COMPANY:
      return {
        ...state,
        company: payload,
        loading: false
      };

    case types.GET_COMPANYS:
      return {
        ...state,
        companys: payload,
        loading: false
      };

    case types.SET_CURRENT_COMPANY:
      return {
        ...state,
        company: action.payload
      };

    case types.CLEAR_COMPANY:
      return {
        ...state,
        company: null,
        companys: [],
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
    case types.DELETE_COMPANY:
      return {
        ...state,
        companys: state.companys.filter(com => com._id !== action.payload),
        loading: false
      };
    case types.COMPANY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
