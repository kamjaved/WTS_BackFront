import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current Empoyee

export const getCurrentEmployee = id => async dispatch => {
  try {
    const res = await axios.get(`/api/employee/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_EMPLOYEE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.EMPLOYEE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// get All Employee
export const getEmployee = () => async dispatch => {
  try {
    const res = await axios.get("/api/employee");
    console.log(res.data);
    dispatch({
      type: types.GET_EMPLOYEES,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.location_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add Employee
export const addEmployee = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/employee", formData);
    dispatch({
      type: types.ADD_EMPLOYEE,
      payload: res.data
    });
    history.push("/company/employee");

    dispatch(setAlert("Employee Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    dispatch({
      type: types.EMPLOYEE_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit Employee
export const editEmployee = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/employee/${id}`, formData);

    dispatch({
      type: types.GET_EMPLOYEE,
      payload: res.data
    });

    history.push("/company/employee");

    dispatch(setAlert("Employee Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.EMPLOYEE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Employee

export const deleteEmployee = id => async dispatch => {
  console.log("click");
  if (window.confirm("Are You Sure?")) {
    try {
      await axios.delete(`/api/employee/${id}`);
      dispatch({
        type: types.DELETE_EMPLOYEE,
        payload: id
      });
      dispatch(setAlert("Employee Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.EMPLOYEE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current Employee
export const setCurrentEmployee = employee => async dispatch => {
  dispatch(
    {
      type: types.SET_CURRENT_EMPLOYEE,
      payload: employee
    },
    console.log(employee)
  );
};

// Clear Employee
export const clearEmployee = () => async dispatch => {
  dispatch({ type: types.CLEAR_EMPLOYEE });
};

//Filter Employee
export const filterEmployee = text => async dispatch => {
  dispatch({ type: types.FILTER_EMPLOYEE, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
