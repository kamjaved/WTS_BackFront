import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editProduct,
  getCurrentProduct
} from "../../_actions/productActions/productAction";

const EditProduct = ({
  product: { product, loading },
  editProduct,
  getCurrentProduct,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    productType: ""
  });

  useEffect(() => {
    getCurrentProduct(match.params.id);
    setFormData({
      productType: loading || !product.productType ? "" : product.productType
    });
    //eslint-disable-next-line
  }, [loading, getCurrentProduct]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editProduct(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Product
                </h3>
                <Link className="btn btn-light" to="/product/productMaster">
                  Back
                </Link>
              </div>

              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Product Type"
                      name="productType"
                      value={formData.productType}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
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

EditProduct.propTypes = {
  editProduct: PropTypes.func.isRequired,
  getCurrentProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(
  mapStateToProps,
  { editProduct, getCurrentProduct }
)(withRouter(EditProduct));
