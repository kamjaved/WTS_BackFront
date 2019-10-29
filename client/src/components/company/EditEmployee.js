import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editEmployee,
  getCurrentEmployee
} from "../../_actions/CompanyActions/employeeAction";

const EditEmployee = ({
  employee: { employee, loading },
  editEmployee,
  getCurrentEmployee,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    employeeId: "",
    lastName: "",
    mobile: "",
    deskNo: "",
    email: "",
    department: ""
  });

  useEffect(() => {
    getCurrentEmployee(match.params.id);
    setFormData({
      firstName: loading || !employee.firstName ? "" : employee.firstName,
      lastName: loading || !employee.lastName ? "" : employee.lastName,
      employeeId: loading || !employee.employeeId ? "" : employee.employeeId,
      mobile: loading || !employee.mobile ? "" : employee.mobile,
      deskNo: loading || !employee.deskNo ? "" : employee.deskNo,
      email: loading || !employee.email ? "" : employee.email,
      department: loading || !employee.department ? "" : employee.department
    });
    //eslint-disable-next-line
  }, [loading, getCurrentEmployee]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editEmployee(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Employee
                </h3>
                <Link className="btn btn-light" to="/company/employee">
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
                        placeholder="First-Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last-Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select id="inputState" className="form-control">
                        <option>Designation</option>
                        <option>FE</option>
                        <option>Operation</option>
                        <option>Admin</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Department"
                        name="department"
                        value={formData.department}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone No"
                        name="mobile"
                        value={formData.mobile}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Desk No"
                        name="deskNo"
                        value={formData.deskNo}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="54ABCD(EmployeeID)"
                        name="employeeId"
                        value={formData.employeeId}
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
                        required
                      />
                    </div>
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

EditEmployee.propTypes = {
  editEmployee: PropTypes.func.isRequired,
  getCurrentEmployee: PropTypes.func.isRequired,
  employee: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //employee: state.employee,
  employee: state.employee
});

export default connect(
  mapStateToProps,
  { editEmployee, getCurrentEmployee }
)(withRouter(EditEmployee));
