import * as types from "../../_actions/types";

const initialState = {
  employee: null,
  employees: [],
  error: {},
  filtered: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_EMPLOYEE:
      return {
        ...state,
        employee: payload,
        loading: false
      };

    case types.GET_EMPLOYEES:
      return {
        ...state,
        employees: payload,
        loading: false
      };

    case types.ADD_EMPLOYEE:
      return {
        ...state,
        employee: payload,
        loading: false
      };

    case types.SET_CURRENT_EMPLOYEE:
      return {
        ...state,
        employee: payload
      };

    case types.CLEAR_EMPLOYEE:
      return {
        ...state,
        employee: null,
        employees: [],
        loading: false
      };

    case types.CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case types.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          employee => employee._id !== action.payload
        ),
        loading: false
      };

    case types.EMPLOYEE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
