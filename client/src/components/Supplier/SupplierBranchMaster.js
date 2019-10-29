import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getSupplierBranchs,
  deleteSupplierBranch,
  setCurrentSupplierBranch
} from "../../_actions/SupplierAction/supplierBranchAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SupplierBranchMaster = ({
  getSupplierBranchs,
  deleteSupplierBranch,
  supplierbranchs,
  setCurrentSupplierBranch
}) => {
  useEffect(() => {
    getSupplierBranchs();
    //eslint-diable-next-line
  }, [getSupplierBranchs]);

  const onDeleteHandler = id => {
    deleteSupplierBranch(id);
  };

  const notAvailableError = <small className="text-danger">NA</small>;

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/supplier/addSupplierBranch">
            <i className="fa fa-plus mr-2"> </i>Add Suppliers Branch
          </Link>

          <Link to="/supplier/supplierMaster">
            <button className="btn btn-dark ml-2">Supplier Detail</button>
          </Link>

          <h1 className="pt-4">Supplier Branch</h1>
          <small className="lead">Add new Branch of Supplier</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Supplier</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
                <th scope="col">Conatct Person 1</th>
                <th scope="col">Conatct Person 2</th>
                <th scope="col">Phone</th>
                <th scope="col">email</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {supplierbranchs.map(sup => (
                <tr key={sup._id}>
                  <td>
                    {!sup.supplier.name ? notAvailableError : sup.supplier.name}
                  </td>
                  <td>{!sup.state ? notAvailableError : sup.state.state}</td>
                  <td>{!sup.city ? notAvailableError : sup.city.city}</td>
                  <td>
                    {!sup.location ? notAvailableError : sup.location.location}
                  </td>
                  <td>{!sup.address ? notAvailableError : sup.address}</td>
                  <td>
                    {!sup.contactPerson1
                      ? notAvailableError
                      : sup.contactPerson1}
                  </td>
                  <td>
                    {!sup.contactPerson2
                      ? notAvailableError
                      : sup.contactPerson2}
                  </td>
                  <td>{!sup.phone ? notAvailableError : sup.phone}</td>
                  <td>{!sup.email ? notAvailableError : sup.email}</td>

                  <td className="text-right">
                    <Link
                      to={`/supplier/editSupplierBranch/${sup._id}`}
                      onClick={() => setCurrentSupplierBranch(sup)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(sup._id)}
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

SupplierBranchMaster.propTypes = {
  getSupplierBranchs: PropTypes.func.isRequired,
  deleteSupplierBranch: PropTypes.func.isRequired,
  //supplierbranchs: PropTypes.array.isRequired,
  setCurrentSupplierBranch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  supplierbranchs: state.supplierbranch.supplierbranchs,
  filtered: state.location.filtered,
  loading: state.location.loading
});

export default connect(
  mapStateToProps,
  { getSupplierBranchs, deleteSupplierBranch, setCurrentSupplierBranch }
)(SupplierBranchMaster);
