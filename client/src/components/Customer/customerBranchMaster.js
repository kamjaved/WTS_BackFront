import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCustomerBranchs,
  deleteCustomerBranch,
  setCurrentCustomerBranch
} from "../../_actions/CustomerAction/customerBranchAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CustomerBranchMaster = ({
  getCustomerBranchs,
  deleteCustomerBranch,
  customerbranchs,
  setCurrentCustomerBranch
}) => {
  useEffect(() => {
    getCustomerBranchs();
    //eslint-diable-next-line
  }, [getCustomerBranchs]);

  const onDeleteHandler = id => {
    deleteCustomerBranch(id);
  };

  const notAvailableError = <small className="text-danger">NA</small>;

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/customer/addCustomerBranch">
            <i className="fa fa-plus mr-2"> </i>Add Customers Branch
          </Link>

          <Link to="/customer/customerMaster">
            <button className="btn btn-dark ml-2">Customer Master </button>
          </Link>

          <Link to="/customer/categoryMaster">
            <button className="btn btn-dark ml-2">Category Master </button>
          </Link>

          <h1 className="pt-4">Customer Branch</h1>
          <small className="lead">Add new Branch of Customer</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
                <th scope="col">Conatct Person 1</th>
                <th scope="col">Conatct Person 2</th>
                <th scope="col">Phone</th>
                <th scope="col">category</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {customerbranchs.map(cust => (
                <tr key={cust._id}>
                  <td>
                    {!cust.customer.name
                      ? notAvailableError
                      : cust.customer.name}
                  </td>
                  <td>{!cust.state ? notAvailableError : cust.state.state}</td>
                  <td>{!cust.city ? notAvailableError : cust.city.city}</td>
                  <td>
                    {!cust.location.address
                      ? notAvailableError
                      : cust.location.address}
                  </td>
                  <td>{!cust.address ? notAvailableError : cust.address}</td>
                  <td>
                    {!cust.contactPerson1
                      ? notAvailableError
                      : cust.contactPerson1}
                  </td>
                  <td>
                    {!cust.contactPerson2
                      ? notAvailableError
                      : cust.contactPerson2}
                  </td>
                  <td>{!cust.phone ? notAvailableError : cust.phone}</td>
                  <td>
                    {!cust.category.category
                      ? notAvailableError
                      : cust.category.category}
                  </td>

                  <td className="text-right">
                    <Link
                      to={`/customer/editCustomerBranch/${cust._id}`}
                      onClick={() => setCurrentCustomerBranch(cust)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(cust._id)}
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

CustomerBranchMaster.propTypes = {
  getCustomerBranchs: PropTypes.func.isRequired,
  deleteCustomerBranch: PropTypes.func.isRequired,
  //customerbranchs: PropTypes.array.isRequired,
  setCurrentCustomerBranch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  customerbranchs: state.customerbranch.customerbranchs,
  filtered: state.location.filtered,
  loading: state.location.loading
});

export default connect(
  mapStateToProps,
  { getCustomerBranchs, deleteCustomerBranch, setCurrentCustomerBranch }
)(CustomerBranchMaster);
