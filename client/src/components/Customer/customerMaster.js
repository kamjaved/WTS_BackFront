import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCustomers,
  addCustomer,
  deleteCustomer,
  setCurrentCustomer
} from "../../_actions/CustomerAction//customerAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CustomerMaster = ({
  getCustomers,
  deleteCustomer,
  setCurrentCustomer,
  customers,
  filtered,
  loading,
  history
}) => {
  useEffect(() => {
    getCustomers();
    //eslint-disable-next-line
  }, [getCustomers]);

  const onDeleteHandler = id => {
    deleteCustomer(id);
  };

  const notAvailableError = <small className="text-danger">NA</small>;

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/customer/addCustomer">
            <i className="fa fa-plus mr-2"> </i>Add Customer
          </Link>

          <Link to="/customer/categoryMaster">
            <button className="btn btn-dark ml-2">Category Master</button>
          </Link>
          <Link to="/customer/customerBranchMaster">
            <button className="btn btn-dark ml-2">
              Customer Branch Master
            </button>
          </Link>

          <h1 className="pt-4">Customer Master</h1>
          <small className="lead">Add New Customer into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">Category</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {customers.map(customer => (
                <tr key={customer._id}>
                  <td>{customer.name}</td>
                  <td>
                    {!customer.category.category
                      ? notAvailableError
                      : customer.category.category}
                  </td>
                  <td className="text-right">
                    <Link
                      to={`/customer/editCustomer/${customer._id}`}
                      onClick={() => setCurrentCustomer(customer)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(customer._id)}
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

CustomerMaster.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired,
  deleteCustomer: PropTypes.func.isRequired,
  setCurrentCustomer: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  customers: state.customer.customers,
  category: state.category.categorys,
  filtered: state.customer.filtered,
  loading: state.customer.loading
});
export default connect(
  mapStateToProps,
  { getCustomers, addCustomer, deleteCustomer, setCurrentCustomer }
)(CustomerMaster);
