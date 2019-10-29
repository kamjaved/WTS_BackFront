import * as types from "../../_actions/types";

const initialState = {
  warranty: null,
  warrantys: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_WARRANTY:
      return {
        ...state,
        warranty: payload,
        loading: false
      };
    case types.GET_WARRANTYS:
      return {
        ...state,
        warrantys: payload,
        loading: false
      };
    case types.ADD_WARRANTY:
      return {
        ...state,
        warranty: payload,
        loading: false
      };
    case types.SET_CURRENT_WARRANTY:
      return {
        ...state,
        warranty: action.payload
      };
    case types.CLEAR_WARRANTY:
      return {
        ...state,
        warranty: null,
        warrantys: [],
        loading: false
      };

    // case types.FILTER_STAFF:
    //   return {
    //     ...warranty,
    //     filtered: warranty.warrantys.filter(warranty => {
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
    case types.DELETE_WARRANTY:
      return {
        ...state,
        warrantys: state.warrantys.filter(
          warranty => warranty._id !== action.payload
        ),
        loading: false
      };
    case types.WARRANTY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
