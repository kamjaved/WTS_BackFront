import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editSupplierBranch,
  getCurrentSupplierBranch
} from "../../_actions/SupplierAction/supplierBranchAction";
import { getStates } from "../../_actions/locationActions/stateAction";
const EditSupplierBranch = ({
  supplierbranch: { supplierbranch, loading },
  getCurrentSupplierBranch,
  editSupplierBranch,
  history,
  getStates,
  states,
  match
}) => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
    state: "",
    contactPerson1: "",
    contactPerson2: ""
  });

  useEffect(() => {
    getStates();
    getCurrentSupplierBranch(match.params.id);
    setFormData({
      phone: loading || !supplierbranch.phone ? "" : supplierbranch.phone,
      address: loading || !supplierbranch.address ? "" : supplierbranch.address,
      email: loading || !supplierbranch.email ? "" : supplierbranch.email,
      contactPerson1:
        loading || !supplierbranch.contactPerson1
          ? ""
          : supplierbranch.contactPerson1,
      contactPerson2:
        loading || !supplierbranch.contactPerson2
          ? ""
          : supplierbranch.contactPerson2
    });
    //eslint-disable-next-line
  }, [loading, getCurrentSupplierBranch]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let stateOptions = states.map(state => (
    <option key={state._id} value={state._id}>
      {state.state}
    </option>
  ));

  const onSubmitHandler = e => {
    e.preventDefault();
    editSupplierBranch(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit SupplierBranch Branch
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

EditSupplierBranch.propTypes = {
  editSupplierBranch: PropTypes.func.isRequired,
  getCurrentSupplierBranch: PropTypes.func.isRequired,
  supplierbranch: PropTypes.object.isRequired,
  getStates: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  supplierbranch: state.supplierbranch,
  states: state.state.states
});

export default connect(
  mapStateToProps,
  { editSupplierBranch, getCurrentSupplierBranch, getStates }
)(withRouter(EditSupplierBranch));
