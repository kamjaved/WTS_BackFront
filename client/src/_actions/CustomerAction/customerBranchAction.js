import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current CustomerBranch
export const getCurrentCustomerBranch = id => async dispatch => {
  try {
    const res = await axios.get(`/api/customerBranch/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_CUSTOMER_BRANCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.CUSTOMER_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all CustomerBranch
export const getCustomerBranchs = () => async dispatch => {
  try {
    const res = await axios.get("/api/customerBranch");
    console.log(res.data);
    dispatch({
      type: types.GET_CUSTOMER_BRANCHS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.customer_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add CustomerBranch
export const addCustomerBranch = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/customerBranch", formData);
    dispatch({
      type: types.ADD_CUSTOMER_BRANCH,
      payload: res.data
    });
    history.push("/customer/customerBranchMaster");

    dispatch(setAlert("CustomerBranch Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    dispatch({
      type: types.CUSTOMER_BRANCH_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit CustomerBranch
export const editCustomerBranch = (formData, history, id) => async dispatch => {
  console.log("Clicked");
  try {
    const res = await axios.patch(`/api/customerBranch/${id}`, formData);

    dispatch({
      type: types.GET_CUSTOMER_BRANCH,
      payload: res.data
    });

    history.push("/customer/customerBranchMaster");

    dispatch(setAlert("CustomerBranch Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.CUSTOMER_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete customer
export const deleteCustomerBranch = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/customerBranch/${id}`);
      dispatch({
        type: types.DELETE_CUSTOMER_BRANCH,
        payload: id
      });
      dispatch(setAlert("CustomerBranch  Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.CUSTOMER_BRANCH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current customer
export const setCurrentCustomerBranch = customer => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_CUSTOMER_BRANCH,
    payload: customer
  });
};

// Clear CustomerBranch
export const clearCustomerBranch = () => async dispatch => {
  dispatch({ type: types.CLEAR_CUSTOMER_BRANCH });
};

//Filter CustomerBranch
export const filterCustomerBranch = text => async dispatch => {
  dispatch({ type: types.FILTER_CUSTOMER_BRANCH, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
