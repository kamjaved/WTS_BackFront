import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getCities } from "../../_actions/locationActions/cityAction";
import { getStates } from "../../_actions/locationActions/stateAction";
import { connect } from "react-redux";
import { addLocation } from "../../_actions/locationActions/locationAction";

const AddLocation = ({
  getCities,
  getStates,
  addLocation,
  states,
  cities,
  history
}) => {
  useEffect(() => {
    getStates();
    getCities();
    //eslint-diable-next-line
  }, [getStates, getCities]);

  const [formData, setFormData] = useState({
    locationName: "",
    phone: "",
    state: "",
    city: ""
  });

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addLocation(formData, history);
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

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Location Branch
                </h3>
                <Link className="btn btn-light" to="/location/locationmaster">
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder="PINCODE"
                        name="phone"
                        value={formData.phone}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Location Name"
                        name="locationName"
                        value={formData.locationName}
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

AddLocation.propTypes = {
  getStates: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  addLocation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  states: state.state.states,
  cities: state.city.cities
});

export default connect(
  mapStateToProps,
  { addLocation, getCities, getStates }
)(AddLocation);
