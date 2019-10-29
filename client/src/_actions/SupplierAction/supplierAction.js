import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current supplier
export const getCurrentSupplier = id => async dispatch => {
  try {
    const res = await axios.get(`/api/supplier/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_SUPPLIER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.SUPPLIER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Suppliers
export const getSuppliers = () => async dispatch => {
  try {
    const res = await axios.get("/api/supplier");
    console.log(res.data.data);
    dispatch({
      type: types.GET_SUPPLIERS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.SUPPLIER_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add supplier
export const addSupplier = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/supplier", formData);
    dispatch({
      type: types.ADD_SUPPLIER,
      payload: res.data
    });
    history.push("/supplier/supplierMaster");

    dispatch(setAlert("Supplier Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors.code === 11000) {
      dispatch(setAlert("Supplier already exists!", "danger"));
    }

    dispatch({
      type: types.SUPPLIER_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit supplier
export const editSupplier = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/supplier/${id}`, formData);

    dispatch({
      type: types.GET_SUPPLIER,
      payload: res.data
    });

    history.push("/supplier/supplierMaster");

    dispatch(setAlert("Supplier Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.SUPPLIER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete supplier
export const deleteSupplier = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/supplier/${id}`);
      dispatch({
        type: types.DELETE_SUPPLIER,
        payload: id
      });
      dispatch(setAlert("Supplier Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.SUPPLIER_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current supplier
export const setCurrentSupplier = supplier => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_SUPPLIER,
    payload: supplier
  });
};

// Clear supplier
export const clearSupplier = () => async dispatch => {
  dispatch({ type: types.CLEAR_SUPPLIER });
};

//Filter supplier
export const filterstate = text => async dispatch => {
  dispatch({ type: types.FILTER_SUPPLIER, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
