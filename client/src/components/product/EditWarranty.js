import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editWarranty,
  getCurrentWarranty
} from "../../_actions/productActions/warrantyAction";

const EditWarranty = ({
  warranty: { warranty, loading },
  editWarranty,
  getCurrentWarranty,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    warranty: ""
  });

  useEffect(() => {
    getCurrentWarranty(match.params.id);
    setFormData({
      warranty: loading || !warranty.warranty ? "" : warranty.warranty
    });
    //eslint-disable-next-line
  }, [loading, getCurrentWarranty]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editWarranty(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Warranty
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
                      value={formData.warranty}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Edit & Submit
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

EditWarranty.propTypes = {
  editWarranty: PropTypes.func.isRequired,
  getCurrentWarranty: PropTypes.func.isRequired,
  warranty: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  warranty: state.warranty
});

export default connect(
  mapStateToProps,
  { editWarranty, getCurrentWarranty }
)(withRouter(EditWarranty));
