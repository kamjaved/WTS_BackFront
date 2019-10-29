import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";
import state from "./locationReducers/stateReducer";
import city from "./locationReducers/cityReducer";
import location from "./locationReducers/locationReducer";
import employee from "./companyReducer/employeeReducer";
import company from "./companyReducer/companyReducer";
import supplier from "./SupplierReducer/supplierReducer";
import supplierbranch from "./SupplierReducer/supplierBranchReducer";

import customer from "./CustomerReducer/customerReducer";
import category from "./CustomerReducer/categoryReducer";
import customerbranch from "./CustomerReducer/customerBranchReducer";

import warranty from "./productReducer/warrantyReducer";
import product from "./productReducer/productReducer";
import productdetail from "./productReducer/productDetailReducer";

export default combineReducers({
  auth,
  alert,
  state,
  city,
  location,
  employee,
  company,
  supplier,
  supplierbranch,
  category,
  customer,
  customerbranch,
  warranty,
  product,
  productdetail
});
