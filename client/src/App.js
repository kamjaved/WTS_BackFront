import React, { Fragment } from "react";
import "./App.css";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import Alert from "./components/UI/Alert";
import Sidebar from "./components/UI/sidebar/Sidebar";
import Landing from "./components/UI/Landing";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";

import StateMaster from "./components/location/StateMaster";
import AddState from "./components/location/AddState";
import EditState from "./components/location/EditState";

import CityMaster from "./components/location/CityMaster";
import AddCity from "./components/location/AddCity";
import EditCity from "./components/location/EditCity";

import LocationMaster from "./components/location/LocationMaster";
import AddLocation from "./components/location/AddLocation";
import EditLocation from "./components/location/EditLocation";
import AddEmployee from "./components/company/AddEmployee";
import EmployeeMaster from "./components/company/EmployeeMaster";
import EditEmployee from "./components/company/EditEmployee";
import CompanyMaster from "./components/company/CompanyMaster";
import AddCompany from "./components/company/AddCompany";
import EditCompany from "./components/company/EditCompany";
import AddSupplier from "./components/Supplier/AddSupplier";
import SupplierMaster from "./components/Supplier/SupplierMaster";
import EditSupplier from "./components/Supplier/EditSupplier";
import SupplierBranchMaster from "./components/Supplier/SupplierBranchMaster";
import AddSupplierBranch from "./components/Supplier/AddSupplierBranch";
import EditSupplierBranch from "./components/Supplier/EditSupplierBranch";
import categoryMaster from "./components/Customer/categoryMaster";
import customerMaster from "./components/Customer/customerMaster";
import customerBranchMaster from "./components/Customer/customerBranchMaster";
import AddCategory from "./components/Customer/AddCategory";
import AddCustomer from "./components/Customer/AddCustomer";
import AddCustomerBranch from "./components/Customer/AddCustomerBranch";
import EditCategory from "./components/Customer/EditCategory";
import EditCustomer from "./components/Customer/EditCustomer";
import EditCustomerBanch from "./components/Customer/EditCustomerBanch";
import AddProduct from "./components/product/AddProduct";
import ProductMaster from "./components/product/ProductMaster";
import WarrantyMaster from "./components/product/WarrantyMaster";
import AddWarranty from "./components/product/AddWarranty";
import ProductDetailMaster from "./components/product/ProductDetailMaster";
import AddProductDetail from "./components/product/AddProductDetail";
import EditProduct from "./components/product/EditProduct";
import EditWarranty from "./components/product/EditWarranty";
import EditProductDetail from "./components/product/EditProductDetail";

const App = () => {
  let routes = (
    <Fragment>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/location/statemaster"
          component={StateMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/location/addState" component={AddState} />
      </Switch>
      <Switch>
        <PrivateRoute exact path={`/editState/:id`} component={EditState} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/location/citymaster"
          component={CityMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/location/addCity" component={AddCity} />
      </Switch>
      <Switch>
        <PrivateRoute exact path={`/editCity/:id`} component={EditCity} />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/location/locationmaster"
          component={LocationMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path="/location/addLocation"
          component={AddLocation}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/location/editLocation/:id`}
          component={EditLocation}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/employee`}
          component={EmployeeMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/addemployee`}
          component={AddEmployee}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/editemployee/:id`}
          component={EditEmployee}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/plantronicsbranch`}
          component={CompanyMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/addCompanyBranch`}
          component={AddCompany}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/company/editCompanyBranch/:id`}
          component={EditCompany}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/addSupplier`}
          component={AddSupplier}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/supplierMaster`}
          component={SupplierMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/editSupplier/:id`}
          component={EditSupplier}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/supplierBranchMaster`}
          component={SupplierBranchMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/addSupplierBranch`}
          component={AddSupplierBranch}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/supplier/editSupplierBranch/:id`}
          component={EditSupplierBranch}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/categoryMaster`}
          component={categoryMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/addCategory`}
          component={AddCategory}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/editCategory/:id`}
          component={EditCategory}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/customerMaster`}
          component={customerMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/addCustomer`}
          component={AddCustomer}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/editCustomer/:id`}
          component={EditCustomer}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/customerBranchMaster`}
          component={customerBranchMaster}
        />
      </Switch>{" "}
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/addCustomerBranch`}
          component={AddCustomerBranch}
        />
      </Switch>{" "}
      <Switch>
        <PrivateRoute
          exact
          path={`/customer/editCustomerBranch/:id`}
          component={EditCustomerBanch}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/addProduct`}
          component={AddProduct}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/productMaster`}
          component={ProductMaster}
        />
        <Switch>
          <PrivateRoute
            exact
            path={`/product/editProduct/:id`}
            component={EditProduct}
          />
        </Switch>
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/addWarranty`}
          component={AddWarranty}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/warrantyMaster`}
          component={WarrantyMaster}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/editWarranty/:id`}
          component={EditWarranty}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/addProductDetail`}
          component={AddProductDetail}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/editProductDetail/:id`}
          component={EditProductDetail}
        />
      </Switch>
      <Switch>
        <PrivateRoute
          exact
          path={`/product/productBranchMaster`} //
          component={ProductDetailMaster}
        />
      </Switch>
    </Fragment>
  );

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Sidebar>{routes}</Sidebar>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

// /supplier/supplierBranchMaster"
