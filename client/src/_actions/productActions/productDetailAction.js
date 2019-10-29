import axios from "axios";
import { setAlert } from "../alertAction";
import * as types from "../types";

// Get current productdetail
export const getCurrentProductDetail = id => async dispatch => {
  try {
    const res = await axios.get(`/api/productDetail/${id}`);
    console.log(res.data);

    dispatch({
      type: types.GET_PRODUCT_BRANCH,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: types.PRODUCT_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get all ProductDetails
export const getProductDetails = () => async dispatch => {
  try {
    const res = await axios.get("/api/productDetail");
    console.log(res.data.data);
    dispatch({
      type: types.GET_PRODUCT_BRANCHS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: types.PRODUCT_BRANCH_ERROR,
    //   payload: { msg: err.response.data, status: err.response.status }
    // });
  }
};

// Add productdetail
export const addProductDetail = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/productDetail", formData);
    dispatch({
      type: types.ADD_PRODUCT_BRANCH,
      payload: res.data
    });
    history.push("/product/productBranchMaster");

    dispatch(setAlert("ProductDetail Added!", "success"));
  } catch (err) {
    const errors = err.response.data.error;
    console.log(errors);

    if (errors.code === 11000) {
      dispatch(setAlert("ProductDetail already exists!", "danger"));
    }

    dispatch({
      type: types.PRODUCT_BRANCH_ERROR,
      payload: { msg: errors, status: err.response.status }
    });
  }
};

// Edit productdetail
export const editProductDetail = (formData, history, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/productDetail/${id}`, formData);

    dispatch({
      type: types.GET_PRODUCT_BRANCH,
      payload: res.data
    });

    history.push("/product/productBranchMaster");

    dispatch(setAlert("ProductDetail Updated", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: types.PRODUCT_BRANCH_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Delete productdetail
export const deleteProductDetail = id => async dispatch => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`/api/productDetail/${id}`);
      dispatch({
        type: types.DELETE_PRODUCT_BRANCH,
        payload: id
      });
      dispatch(setAlert("ProductDetail Deleted!", "danger"));
    } catch (err) {
      dispatch({
        type: types.PRODUCT_BRANCH_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};

//Set Current productdetail
export const setCurrentProductDetail = productdetail => async dispatch => {
  dispatch({
    type: types.SET_CURRENT_PRODUCT_BRANCH,
    payload: productdetail
  });
};

// Clear productdetail
export const clearProductDetail = () => async dispatch => {
  dispatch({ type: types.CLEAR_PRODUCT_BRANCH });
};

//Filter productdetail
export const filterproductdetail = text => async dispatch => {
  dispatch({ type: types.FILTER_PRODUCT_BRANCH, payload: text });
};

// Clear Filter
export const clearFilter = () => async dispatch => {
  dispatch({ type: types.CLEAR_FILTER });
};
