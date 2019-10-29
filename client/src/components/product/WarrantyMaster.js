import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getWarrantys,
  addWarranty,
  deleteWarranty,
  setCurrentWarranty
} from "../../_actions/product/warrantyAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const WarrantyMaster = ({
  getWarrantys,
  deleteWarranty,
  setCurrentWarranty,
  warrantys,
  filtered,
  loading,
  history
}) => {
  useEffect(() => {
    getWarrantys();
    //eslint-diable-next-line
  }, [getWarrantys]);

  const onDeleteHandler = id => {
    deleteWarranty(id);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/product/addWarranty">
            <i className="fa fa-plus mr-2"> </i>Add Warranty
          </Link>

          <Link to="/product/productMaster">
            <button className="btn btn-dark ml-2">Product Master</button>
          </Link>
          <Link to="/product/productBranchMaster">
            <button className="btn btn-dark ml-2">Product Branch Master</button>
          </Link>

          <h1 className="pt-4">Warranty Master</h1>
          <small className="lead">Add new Warranty into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Warranty</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {warrantys.map(warranty => (
                <tr key={warranty._id}>
                  <td>{warranty.warranty}</td>
                  <td className="text-right">
                    <Link
                      to={`/product/editWarranty/${warranty._id}`}
                      onClick={() => setCurrentWarranty(warranty)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(warranty._id)}
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

WarrantyMaster.propTypes = {
  getWarrantys: PropTypes.func.isRequired,
  addWarranty: PropTypes.func.isRequired,
  deleteWarranty: PropTypes.func.isRequired,
  setCurrentWarranty: PropTypes.func.isRequired,
  warrantys: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  warrantys: state.warranty.warrantys,
  warranty: state.warranty.warranty,
  filtered: state.warranty.filtered,
  loading: state.warranty.loading
});
export default connect(
  mapStateToProps,
  { getWarrantys, addWarranty, deleteWarranty, setCurrentWarranty }
)(WarrantyMaster);
