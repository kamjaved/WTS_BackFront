import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current Company
export const getCurrentCompany = id => async dispatch => {
  try {
    const res = await axios.get(`/api/company-branch/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_COMPANY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Company
export const getCompanys = () => async dispatch => {
  try {
    const res = await axios.get("/api/company-branch");
    console.log(res.data);
    dispatch({
      type: types.GET_COMPANYS,
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

// Add Company
export const addCompany = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/company-branch", formData);
    dispatch({
      type: types.ADD_COMPANY,
      payload: res.data
    });
    history.push("/company/plantronicsbranch");

    dispatch(setAlert("Company Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    dispatch({
      type: types.COMPANY_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit Company
export const editCompany = (formData, history, id) => async dispatch => {
  console.log("Clicked");
  try {
    const res = await axios.patch(`/api/company-branch/${id}`, formData);

    dispatch({
      type: types.GET_COMPANY,
      payload: res.data
    });

    history.push("/company/plantronicsbranch");

    dispatch(setAlert("Company Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.COMPANY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete location
export const deleteCompany = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/company-branch/${id}`);
      dispatch({
        type: types.DELETE_COMPANY,
        payload: id
      });
      dispatch(setAlert("Company  Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.COMPANY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current company
export const setCurrentCompany = company => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_COMPANY,
    payload: company
  });
};

// Clear Company
export const clearCompany = () => async dispatch => {
  dispatch({ type: types.CLEAR_COMPANY });
};

//Filter Company
export const filterCompany = text => async dispatch => {
  dispatch({ type: types.FILTER_COMPANY, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
