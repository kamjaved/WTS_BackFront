import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editCompany,
  getCurrentCompany
} from "../../_actions/CompanyActions/companyAction";

const EditCompany = ({
  company: { company, loading },
  editCompany,
  getCurrentCompany,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    phone: "",
    address: ""
  });

  useEffect(() => {
    getCurrentCompany(match.params.id);
    setFormData({
      phone: loading || !company.phone ? "" : company.phone,
      address: loading || !company.address ? "" : company.address
    });
    //eslint-disable-next-line
  }, [loading, getCurrentCompany]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editCompany(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Company Branch
                </h3>
                <Link className="btn btn-light" to="/company/plantronicsbranch">
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
                        placeholder="Address"
                        name="address"
                        value={formData.address}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
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

EditCompany.propTypes = {
  editCompany: PropTypes.func.isRequired,
  getCurrentCompany: PropTypes.func.isRequired,
  company: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  company: state.company
});

export default connect(
  mapStateToProps,
  { editCompany, getCurrentCompany }
)(withRouter(EditCompany));
