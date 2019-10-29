import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editCustomerBranch,
  getCurrentCustomerBranch
} from "../../_actions/CustomerAction/customerBranchAction";

const EditCustomerBranch = ({
  customerbranch: { customerbranch, loading },
  getCurrentCustomerBranch,
  editCustomerBranch,
  history,
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
    getCurrentCustomerBranch(match.params.id);
    setFormData({
      phone: loading || !customerbranch.phone ? "" : customerbranch.phone,
      address: loading || !customerbranch.address ? "" : customerbranch.address,
      email: loading || !customerbranch.email ? "" : customerbranch.email,
      contactPerson1:
        loading || !customerbranch.contactPerson1
          ? ""
          : customerbranch.contactPerson1,
      contactPerson2:
        loading || !customerbranch.contactPerson2
          ? ""
          : customerbranch.contactPerson2
    });
    //eslint-disable-next-line
  }, [loading, getCurrentCustomerBranch]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editCustomerBranch(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit CustomerBranch Branch
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

EditCustomerBranch.propTypes = {
  editCustomerBranch: PropTypes.func.isRequired,
  getCurrentCustomerBranch: PropTypes.func.isRequired,
  customerbranch: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customerbranch: state.customerbranch
});

export default connect(
  mapStateToProps,
  { editCustomerBranch, getCurrentCustomerBranch }
)(withRouter(EditCustomerBranch));
