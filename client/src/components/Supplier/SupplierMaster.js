import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  setCurrentSupplier
} from "../../_actions/SupplierAction/supplierAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const SupplierMaster = ({
  getSuppliers,
  deleteSupplier,
  setCurrentSupplier,
  suppliers,
  filtered,
  loading,
  history
}) => {
  useEffect(() => {
    getSuppliers();
    //eslint-diable-next-line
  }, [getSuppliers]);

  const onDeleteHandler = id => {
    deleteSupplier(id);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/supplier/addSupplier">
            <i className="fa fa-plus mr-2"> </i>Add Supplier
          </Link>

          <Link to="/supplier/supplierBranchMaster">
            <button className="btn btn-dark ml-2">
              Supplier Branch Master{" "}
            </button>
          </Link>

          <h1 className="pt-4">Supplier Master</h1>
          <small className="lead">Add new Supplier into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Supplier</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {suppliers.map(supplier => (
                <tr key={supplier._id}>
                  <td>{supplier.name}</td>
                  <td className="text-right">
                    <Link
                      to={`/supplier/editSupplier/${supplier._id}`}
                      onClick={() => setCurrentSupplier(supplier)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(supplier._id)}
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

SupplierMaster.propTypes = {
  getSuppliers: PropTypes.func.isRequired,
  addSupplier: PropTypes.func.isRequired,
  deleteSupplier: PropTypes.func.isRequired,
  setCurrentSupplier: PropTypes.func.isRequired,
  suppliers: PropTypes.array.isRequired
};

const mapSupplierToProps = state => ({
  suppliers: state.supplier.suppliers,
  supplier: state.supplier.supplier,
  filtered: state.supplier.loading
});
export default connect(
  mapSupplierToProps,
  { getSuppliers, addSupplier, deleteSupplier, setCurrentSupplier }
)(SupplierMaster);
