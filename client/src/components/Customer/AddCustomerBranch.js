import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCities } from "../../_actions/locationActions/cityAction";
import { getStates } from "../../_actions/locationActions/stateAction";
import { getLocations } from "../../_actions/locationActions/locationAction";
import { getCustomers } from "../../_actions/CustomerAction/customerAction";
import { getCategorys } from "../../_actions/CustomerAction/categoryAction";
import { connect } from "react-redux";
import { addCustomerBranch } from "../../_actions/CustomerAction/customerBranchAction";

const AddCustomerBranch = ({
  getCities,
  getStates,
  getLocations,
  getCustomers,
  getCategorys,
  addCustomerBranch,
  states,
  cities,
  locations,
  customers,
  categorys,
  history
}) => {
  useEffect(() => {
    getStates();
    getCities();
    getLocations();
    getCustomers();
    getCategorys();
    //eslint-diable-next-line
  }, [getStates, getCities, getLocations, getCustomers, getCategorys]);

  const [formData, setFormData] = useState({
    location: "",
    state: "",
    city: "",
    address: "",
    customer: "",
    phone: "",
    email: "",
    contactPerson1: "",
    contactPerson2: "",
    category: ""
    // headOffice:false,
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addCustomerBranch(formData, history);
  };

  let stateOptions = states.map(state => (
    <option key={state._id} value={state._id}>
      {state.state}
    </option>
  ));

  let cityOptions = cities.map(city => (
    <option key={city._id} value={city._id}>
      {city.city}
    </option>
  ));
  let locationOptions = locations.map(loc => (
    <option key={loc._id} value={loc._id}>
      {loc.address}
    </option>
  ));
  let customerOptions = customers.map(supp => (
    <option key={supp._id} value={supp._id}>
      {supp.name}
    </option>
  ));
  let categoryOption = categorys.map(ctgry => (
    <option key={ctgry._id} value={ctgry._id}>
      {ctgry.category}
    </option>
  ));

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add CustomerBranch Branch
                </h3>
                <Link
                  className="btn btn-light"
                  to="/customer/customerBranchMaster"
                >
                  Back
                </Link>
              </div>
              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="State"
                        name="state"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose State</option>
                        {stateOptions}
                      </select>
                    </div>

                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="City"
                        name="city"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose City</option>
                        {cityOptions}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="Location"
                        name="location"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose Location</option>
                        {locationOptions}
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="Customer"
                        name="customer"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose Customer</option>
                        {customerOptions}
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Person 1"
                        name="contactPerson1"
                        value={formData.contactPerson1}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contact Person 2"
                        name="contactPerson2"
                        value={formData.contactPerson2}
                        onChange={e => onChangeHandler(e)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={e => onChangeHandler(e)}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="Category"
                        name="category"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose Category</option>
                        {categoryOption}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Add
                  </button>
                </form>
              </div>
              {/*-- Modal Body Ends  -*/}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AddCustomerBranch.propTypes = {
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  getCategorys: PropTypes.func.isRequired,
  getCustomers: PropTypes.func.isRequired,
  addCustomerBranch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  states: state.state.states,
  cities: state.city.cities,
  locations: state.location.locations,
  customers: state.customer.customers,
  categorys: state.category.categorys
});

export default connect(
  mapStateToProps,
  {
    addCustomerBranch,
    getCustomers,
    getLocations,
    getCities,
    getStates,
    getCategorys
  }
)(AddCustomerBranch);
