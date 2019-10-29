import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current SupplierBranch
export const getCurrentSupplierBranch = id => async dispatch => {
  try {
    const res = await axios.get(`/api/supplierBranch/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_SUPPLIER_BRANCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.SUPPLIER_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all SupplierBranch
export const getSupplierBranchs = () => async dispatch => {
  try {
    const res = await axios.get("/api/supplierBranch");
    console.log(res.data);
    dispatch({
      type: types.GET_SUPPLIER_BRANCHS,
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

// Add SupplierBranch
export const addSupplierBranch = (formData, history) => async dispatch => {
  console.log(formData);
  try {
    const res = await axios.post("/api/supplierBranch", formData);
    dispatch({
      type: types.ADD_SUPPLIER_BRANCH,
      payload: res.data
    });
    history.push("/supplier/supplierBranchMaster");

    dispatch(setAlert("SupplierBranch Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    dispatch({
      type: types.SUPPLIER_BRANCH_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit SupplierBranch
export const editSupplierBranch = (formData, history, id) => async dispatch => {
  console.log("Clicked");
  try {
    const res = await axios.patch(`/api/supplierBranch/${id}`, formData);

    dispatch({
      type: types.GET_SUPPLIER_BRANCH,
      payload: res.data
    });

    history.push("/supplier/supplierBranchMaster");

    dispatch(setAlert("SupplierBranch Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.SUPPLIER_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete location
export const deleteSupplierBranch = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/supplierBranch/${id}`);
      dispatch({
        type: types.DELETE_SUPPLIER_BRANCH,
        payload: id
      });
      dispatch(setAlert("SupplierBranch  Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.SUPPLIER_BRANCH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current supplier
export const setCurrentSupplierBranch = supplier => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_SUPPLIER_BRANCH,
    payload: supplier
  });
};

// Clear SupplierBranch
export const clearSupplierBranch = () => async dispatch => {
  dispatch({ type: types.CLEAR_SUPPLIER_BRANCH });
};

//Filter SupplierBranch
export const filterSupplierBranch = text => async dispatch => {
  dispatch({ type: types.FILTER_SUPPLIER_BRANCH, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
