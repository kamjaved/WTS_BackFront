import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editLocation,
  getCurrentLocation
} from "../../_actions/locationActions/locationAction";

const EditLocation = ({
  location: { location, loading },
  editLocation,
  getCurrentLocation,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    phone: "",
    locationName: ""
  });

  useEffect(() => {
    getCurrentLocation(match.params.id);
    setFormData({
      locationName:
        loading || !location.locationName ? "" : location.locationName,
      phone: loading || !location.phone ? "" : location.phone
    });
    //eslint-disable-next-line
  }, [loading, getCurrentLocation]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editLocation(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Location Branch
                </h3>
                <Link className="btn btn-light" to="/location/locationmaster">
                  Back
                </Link>
              </div>
              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
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
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Edit & Submit
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

EditLocation.propTypes = {
  editLocation: PropTypes.func.isRequired,
  getCurrentLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  location: state.location
});

export default connect(
  mapStateToProps,
  { editLocation, getCurrentLocation }
)(withRouter(EditLocation));
