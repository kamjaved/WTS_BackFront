import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current product
export const getCurrentProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/api/product/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_PRODUCT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all Products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("/api/product");
    console.log(res.data);
    dispatch({
      type: types.GET_PRODUCTS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.PRODUCT_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add product
export const addProduct = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/product", formData);
    dispatch({
      type: types.ADD_PRODUCT,
      payload: res.data
    });
    history.push("/product/productMaster");

    dispatch(setAlert("Product Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors.code === 11000) {
      dispatch(setAlert("Product already exists!", "danger"));
    }

    dispatch({
      type: types.PRODUCT_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit product
export const editProduct = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/product/${id}`, formData);

    dispatch({
      type: types.GET_PRODUCT,
      payload: res.data
    });

    history.push("/product/productMaster");

    dispatch(setAlert("Product Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete product
export const deleteProduct = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/product/${id}`);
      dispatch({
        type: types.DELETE_PRODUCT,
        payload: id
      });
      dispatch(setAlert("Product Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current product
export const setCurrentProduct = product => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_PRODUCT,
    payload: product
  });
};

// Clear product
export const clearProduct = () => async dispatch => {
  dispatch({ type: types.CLEAR_PRODUCT });
};

//Filter product
export const filterproduct = text => async dispatch => {
  dispatch({ type: types.FILTER_PRODUCT, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
