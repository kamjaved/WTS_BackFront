import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  addWarranty,
  getWarrantys
} from "../../_actions/product/warrantyAction";

const AddWarranty = ({ addWarranty, history, getWarrantys }) => {
  useEffect(() => {
    getWarrantys();
    //eslint-disable-next-line
  }, [getWarrantys]);

  const [formData, setFormData] = useState({
    warranty: ""
  });

  const { warranty } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addWarranty(formData, history);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Warranty
                </h3>
                <Link className="btn btn-light" to="/product/warrantyMaster">
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
                      placeholder="Enter Warranty"
                      name="warranty"
                      value={warranty}
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

AddWarranty.propTypes = {
  addWarranty: PropTypes.func.isRequired,
  setCurrentWarranty: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  warranty: state.warranty
});
export default connect(
  mapStateToProps,
  { addWarranty, getWarrantys }
)(AddWarranty);
