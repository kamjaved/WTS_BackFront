import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  getSuppliers,
  addSupplier
} from "../../_actions/SupplierAction/supplierAction";

const AddSupplier = ({ getSuppliers, addSupplier, history }) => {
  useEffect(() => {
    getSuppliers();
    //eslint-disable-next-line
  }, [getSuppliers]);

  const [formData, setFormData] = useState({
    name: ""
  });

  const { name } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addSupplier(formData, history);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Supplier
                </h3>
                <Link className="btn btn-light" to="/supplier/supplierMaster">
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
                      value={name}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Add
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

AddSupplier.propTypes = {
  addSupplier: PropTypes.func.isRequired
  // setCurrentSupplier: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  supplier: state.supplier
});
export default connect(
  mapStateToProps,
  { addSupplier, getSuppliers }
)(AddSupplier);
