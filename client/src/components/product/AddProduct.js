import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addProduct } from "../../_actions/productActions/productAction";

const AddProduct = ({ addProduct, history }) => {
  const [formData, setFormData] = useState({
    productType: ""
  });

  const { productType } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addProduct(formData, history);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Product
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
                      value={productType}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
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

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  product: state.product
});
export default connect(
  mapStateToProps,
  { addProduct }
)(AddProduct);
