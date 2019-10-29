import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  addProduct,
  deleteProduct,
  setCurrentProduct
} from "../../_actions/product/productAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ProductMaster = ({
  getProducts,
  deleteProduct,
  setCurrentProduct,
  products,
  filtered,
  loading,
  history
}) => {
  useEffect(() => {
    getProducts();
    //eslint-diable-next-line
  }, [getProducts]);

  const onDeleteHandler = id => {
    deleteProduct(id);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/product/addProduct">
            <i className="fa fa-plus mr-2"> </i>Add Product
          </Link>

          <Link to="/product/warrantyMaster">
            <button className="btn btn-dark ml-2">Warranty Master</button>
          </Link>
          <Link to="/product/productBranchMaster">
            <button className="btn btn-dark ml-2">Product Branch Master</button>
          </Link>

          <h1 className="pt-4">Product Master</h1>
          <small className="lead">Add new Product into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>{product.productType}</td>
                  <td className="text-right">
                    <Link
                      to={`/product/editProduct/${product._id}`}
                      onClick={() => setCurrentProduct(product)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(product._id)}
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

ProductMaster.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  setCurrentProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  products: state.product.products,
  product: state.product.product,
  filtered: state.product.filtered,
  loading: state.product.loading
});
export default connect(
  mapStateToProps,
  { getProducts, addProduct, deleteProduct, setCurrentProduct }
)(ProductMaster);
