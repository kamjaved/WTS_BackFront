import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCities } from "../../_actions/locationActions/cityAction";
import { getStates } from "../../_actions/locationActions/stateAction";
import { getLocations } from "../../_actions/locationActions/locationAction";
import { connect } from "react-redux";
import { addCompany } from "../../_actions/CompanyActions/companyAction";

const AddCompany = ({
  getCities,
  getStates,
  getLocations,
  addCompany,
  states,
  cities,
  locations,
  history
}) => {
  useEffect(() => {
    getStates();
    getCities();
    getLocations();
    //eslint-diable-next-line
  }, [getStates, getCities, getLocations]);

  const [formData, setFormData] = useState({
    location: "",
    phone: "",
    state: "",
    city: "",
    address: ""
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addCompany(formData, history);
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

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Company Branch
                </h3>
                <Link className="btn btn-light" to="/company/palntronicsbranch">
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

AddCompany.propTypes = {
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  getLocations: PropTypes.func.isRequired,
  addCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  states: state.state.states,
  cities: state.city.cities,
  locations: state.location.locations
});

export default connect(
  mapStateToProps,
  { addCompany, getLocations, getCities, getStates }
)(AddCompany);
