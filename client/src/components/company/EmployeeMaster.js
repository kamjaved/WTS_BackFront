import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getEmployee,
  addEmployee,
  deleteEmployee,
  setCurrentEmployee
} from "../../_actions/CompanyActions/employeeAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const EmployeeMaster = ({
  getEmployee,
  addEmployee,
  deleteEmployee,
  setCurrentEmployee,
  employees
}) => {
  useEffect(() => {
    getEmployee();
    //eslint-disable-next-line
  }, [getEmployee]);

  const onDeleteHandler = id => {
    deleteEmployee(id);
  };
  const notAvailableError = <small className="text-danger">NA</small>;
  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/company/addemployee">
            <i className="fa fa-plus mr-2"> </i>Add Employee
          </Link>

          <Link to="/company/palntronicsbranch">
            <button className="btn btn-dark ml-2">Plantronics Branch</button>
          </Link>

          <h1 className="pt-4">Employee Master</h1>
          <small className="lead">Add New Employee into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Designation</th>
                <th scope="col">Department</th>
                <th scope="col">Phone</th>
                <th scope="col">Employee ID</th>
                <th scope="col">Email</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {employees.map(employee => (
                <tr key={employee._id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>
                    {!employee.designation
                      ? notAvailableError
                      : employee.designation}
                  </td>
                  <td>{employee.department}</td>
                  <td>{employee.mobile}</td>
                  <td>
                    {!employee.employeeId
                      ? notAvailableError
                      : employee.employeeId}
                  </td>
                  <td>{employee.email}</td>

                  <td className="text-right">
                    <Link
                      to={`/company/editemployee/${employee._id}`}
                      onClick={() => setCurrentEmployee(employee)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(employee._id)}
                    >
                      <i className="far fa-trash-alt text-danger fa-md"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

EmployeeMaster.propTypes = {
  getEmployee: PropTypes.func.isRequired,
  addEmployee: PropTypes.func.isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  setCurrentEmployee: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  employees: state.employee.employees,
  filtered: state.filtered,
  loading: state.loading
});
export default connect(
  mapStateToProps,
  { getEmployee, addEmployee, deleteEmployee, setCurrentEmployee }
)(EmployeeMaster);
