import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current category
export const getCurrentCategory = id => async dispatch => {
  try {
    const res = await axios.get(`/api/category/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_CATEGORY,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Categorys
export const getCategorys = () => async dispatch => {
  try {
    const res = await axios.get("/api/category");
    console.log(res.data.data);
    dispatch({
      type: types.GET_CATEGORYS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.CATEGORY_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add category
export const addCategory = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/category", formData);
    dispatch({
      type: types.ADD_CATEGORY,
      payload: res.data
    });
    history.push("/customer/categoryMaster");

    dispatch(setAlert("Category Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors.code === 11000) {
      dispatch(setAlert("Category already exists!", "danger"));
    }

    dispatch({
      type: types.CATEGORY_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit category
export const editCategory = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/category/${id}`, formData);

    dispatch({
      type: types.GET_CATEGORY,
      payload: res.data
    });

    history.push("/customer/categoryMaster");

    dispatch(setAlert("Category Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.CATEGORY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete category
export const deleteCategory = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/category/${id}`);
      dispatch({
        type: types.DELETE_CATEGORY,
        payload: id
      });
      dispatch(setAlert("Category Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.CATEGORY_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current category
export const setCurrentCategory = category => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_CATEGORY,
    payload: category
  });
};

// Clear category
export const clearCategory = () => async dispatch => {
  dispatch({ type: types.CLEAR_CATEGORY });
};

//Filter category
export const filtercategory = text => async dispatch => {
  dispatch({ type: types.FILTER_CATEGORY, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
