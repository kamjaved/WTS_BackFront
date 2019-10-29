import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current warranty
export const getCurrentWarranty = id => async dispatch => {
  try {
    const res = await axios.get(`/api/warranty/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_WARRANTY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.WARRANTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Warrantys
export const getWarrantys = () => async dispatch => {
  try {
    const res = await axios.get("/api/warranty");
    console.log(res.data.data);
    dispatch({
      type: types.GET_WARRANTYS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.WARRANTY_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add warranty
export const addWarranty = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/warranty", formData);
    dispatch({
      type: types.ADD_WARRANTY,
      payload: res.data
    });
    history.push("/product/warrantyMaster");

    dispatch(setAlert("Warranty Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors.code === 11000) {
      dispatch(setAlert("Warranty already exists!", "danger"));
    }

    dispatch({
      type: types.WARRANTY_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit warranty
export const editWarranty = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/warranty/${id}`, formData);

    dispatch({
      type: types.GET_WARRANTY,
      payload: res.data
    });

    history.push("/product/warrantyMaster");

    dispatch(setAlert("Warranty Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.WARRANTY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete warranty
export const deleteWarranty = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/warranty/${id}`);
      dispatch({
        type: types.DELETE_WARRANTY,
        payload: id
      });
      dispatch(setAlert("Warranty Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.WARRANTY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current warranty
export const setCurrentWarranty = warranty => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_WARRANTY,
    payload: warranty
  });
};

// Clear warranty
export const clearWarranty = () => async dispatch => {
  dispatch({ type: types.CLEAR_WARRANTY });
};

//Filter warranty
export const filterwarranty = text => async dispatch => {
  dispatch({ type: types.FILTER_WARRANTY, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
