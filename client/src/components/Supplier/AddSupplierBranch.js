import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCities } from "../../_actions/locationActions/cityAction";
import { getStates } from "../../_actions/locationActions/stateAction";
import { getLocations } from "../../_actions/locationActions/locationAction";
import { getSuppliers } from "../../_actions/SupplierAction/supplierAction";
import { connect } from "react-redux";
import { addSupplierBranch } from "../../_actions/SupplierAction/supplierBranchAction";

const AddSupplierBranch = ({
  getCities,
  getStates,
  getLocations,
  getSuppliers,
  addSupplierBranch,
  states,
  cities,
  locations,
  suppliers,
  history
}) => {
  useEffect(() => {
    getStates();
    getCities();
    getLocations();
    getSuppliers();
    //eslint-diable-next-line
  }, [getStates, getCities, getLocations, getSuppliers]);

  const [formData, setFormData] = useState({
    location: "",
    state: "",
    city: "",
    address: "",
    supplier: "",
    phone: "",
    email: "",
    contactPerson1: "",
    contactPerson2: ""
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addSupplierBranch(formData, history);
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
  let supplierOptions = suppliers.map(supp => (
    <option key={supp._id} value={supp._id}>
      {supp.name}
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
                  Add SupplierBranch Branch
                </h3>
                <Link
                  className="btn btn-light"
                  to="/supplier/supplierBranchMaster"
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
                        label="Supplier"
                        name="supplier"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Choose Supplier</option>
                        {supplierOptions}
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
                    <div className="form-group col-sm-12">
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

AddSupplierBranch.propTypes = {
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  getSuppliers: PropTypes.func.isRequired,
  addSupplierBranch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  states: state.state.states,
  cities: state.city.cities,
  locations: state.location.locations,
  suppliers: state.supplier.suppliers
});

export default connect(
  mapStateToProps,
  { addSupplierBranch, getSuppliers, getLocations, getCities, getStates }
)(AddSupplierBranch);
