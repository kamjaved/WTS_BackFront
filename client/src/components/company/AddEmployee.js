import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getEmployee,
  addEmployee
} from "../../_actions/CompanyActions/employeeAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const AddEmployee = ({ getEmployees, addEmployee, history }) => {
  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, [getEmployees]);

  const [formData, setFormData] = useState({
    firstName: "",
    employeeId: "",
    lastName: "",
    mobile: "",
    deskNo: "",
    email: "",
    department: ""
  });

  const {
    firstName,
    employeeId,
    lastName,
    mobile,
    deskNo,
    email,
    department
  } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addEmployee(formData, history);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Employee
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
                        value={firstName}
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
                        value={lastName}
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
                        value={department}
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
                        value={mobile}
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
                        value={deskNo}
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
                        value={employeeId}
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
                        value={email}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
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
AddEmployee.propTypes = {
  getEmployees: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired
  // setCurrentCity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employee: state.employee
});

export default connect(
  mapStateToProps,
  { addEmployee, getEmployee }
)(AddEmployee);
