import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
import {
  editSupplier,
  getCurrentSupplier
} from "../../_actions/SupplierAction/supplierAction";

const EditSupplier = ({
  supplier: { supplier, loading },
  editSupplier,
  getCurrentSupplier,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    name: ""
  });

  useEffect(() => {
    getCurrentSupplier(match.params.id);
    setFormData({
      name: loading || !supplier.name ? "" : supplier.name
    });
    //eslint-disable-next-line
  }, [loading, getCurrentSupplier]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editSupplier(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Supplier
                </h3>
                <Link className="btn btn-light" to="/supplier/suppliermaster">
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
                      placeholder="Enter Supplier"
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

EditSupplier.propTypes = {
  editSupplier: PropTypes.func.isRequired,
  getCurrentSupplier: PropTypes.func.isRequired,
  supplier: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  supplier: state.supplier
});

export default connect(
  mapStateToProps,
  { editSupplier, getCurrentSupplier }
)(withRouter(EditSupplier));
