import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getProductDetails,
  deleteProductDetail,
  setCurrentProductDetail
} from "../../_actions/productActions/productDetailAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProductDetailMaster = ({
  getProductDetails,
  deleteProductDetail,
  productdetails,
  setCurrentProductDetail
}) => {
  useEffect(() => {
    getProductDetails();
    //eslint-diable-next-line
  }, [getProductDetails]);

  const onDeleteHandler = id => {
    deleteProductDetail(id);
  };

  const notAvailableError = <small className="text-danger">NA</small>;

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/product/addProductDetail">
            <i className="fa fa-plus mr-2"> </i>Add Product Branch
          </Link>

          <Link to="/product/productMaster">
            <button className="btn btn-dark ml-2">Product Master </button>
          </Link>

          <Link to="/product/warrantyMaster">
            <button className="btn btn-dark ml-2">Warranty Master </button>
          </Link>

          <h1 className="pt-4">Product Branch</h1>
          <small className="lead">Add new Branch of Product</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Part Name</th>
                <th scope="col">Product Type</th>
                <th scope="col">Product</th>
                <th scope="col">Warranty(Month)</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productdetails.map(prod => (
                <tr key={prod._id}>
                  <td>{!prod.partName ? notAvailableError : prod.partName}</td>

                  <td>
                    {!prod.productType
                      ? notAvailableError
                      : prod.productType.productType}
                  </td>
                  <td>
                    {!prod.productName ? notAvailableError : prod.productName}
                  </td>
                  <td>
                    {!prod.warranty.warranty
                      ? notAvailableError
                      : prod.warranty.warranty}
                  </td>

                  <td>{!prod.desc ? notAvailableError : prod.desc}</td>

                  <td className="text-right">
                    <Link
                      to={`/product/editProductDetail/${prod._id}`}
                      onClick={() => setCurrentProductDetail(prod)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(prod._id)}
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

ProductDetailMaster.propTypes = {
  getProductDetails: PropTypes.func.isRequired,
  deleteProductDetail: PropTypes.func.isRequired,
  //productdetails: PropTypes.array.isRequired,
  setCurrentProductDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  productdetails: state.productdetail.productdetails,
  filtered: state.location.filtered,
  loading: state.location.loading
});

export default connect(
  mapStateToProps,
  { getProductDetails, deleteProductDetail, setCurrentProductDetail }
)(ProductDetailMaster);
