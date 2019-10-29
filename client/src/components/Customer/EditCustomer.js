import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
  editCustomer,
  getCurrentCustomer
} from "../../_actions/CustomerAction//customerAction";

const EditCustomer = ({
  customer: { customer, loading },
  editCustomer,
  getCurrentCustomer,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    name: ""
  });

  useEffect(() => {
    getCurrentCustomer(match.params.id);
    setFormData({
      name: loading || !customer.name ? "" : customer.name
    });
    //eslint-disable-next-line
  }, [loading, getCurrentCustomer]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editCustomer(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Customer
                </h3>
                <Link className="btn btn-light" to="/customer/customerMaster">
                  Back
                </Link>
              </div>

              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Edit Customer"
                      name="name"
                      value={formData.name}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditCustomer.propTypes = {
  editCustomer: PropTypes.func.isRequired,
  getCurrentCustomer: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customer: state.customer
});

//alert(customer);

export default connect(
  mapStateToProps,
  { editCustomer, getCurrentCustomer }
)(withRouter(EditCustomer));
