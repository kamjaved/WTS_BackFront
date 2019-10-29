import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductDetail } from "../../_actions/productActions/productDetailAction";
import { getWarrantys } from "../../_actions/productActions/warrantyAction";
import { getProducts } from "../../_actions/productActions/productAction";

const AddProductDetail = ({
  getWarrantys,
  getProducts,
  addProductDetail,
  warrantys,
  products,
  history
}) => {
  useEffect(() => {
    getProducts();
    getWarrantys();
    //eslint-diable-next-line
  }, [getProducts, getWarrantys]);

  const [formData, setFormData] = useState({
    partName: "",
    productName: "",
    productType: "",
    warranty: "",
    desc: ""
  });

  // const { partName, productName, productType, warranty, desc } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addProductDetail(formData, history);
  };

  let Warroptions = warrantys.map(warr => (
    <option key={warr._id} value={warr._id}>
      {warr.warranty}
    </option>
  ));
  let Prodoptions = products.map(prod => (
    <option key={prod._id} value={prod._id}>
      {prod.productType}
    </option>
  ));

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add ProductDetail
                </h3>
                <Link
                  className="btn btn-light"
                  to="/product/productBranchMaster"
                >
                  Back
                </Link>
              </div>

              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Part-Name"
                        name="partName"
                        value={formData.partName}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        name="productName"
                        value={formData.productName}
                        onChange={e => onChangeHandler(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="Product Type"
                        name="productType"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Select Product Type</option>
                        {Prodoptions}
                      </select>
                    </div>
                    <div className="form-group col-sm-6">
                      <select
                        className="form-control"
                        label="Warranty"
                        name="warranty"
                        width={8}
                        onChange={e => onChangeHandler(e)}
                      >
                        <option>Select Warranty</option>
                        {Warroptions}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Description"
                      name="desc"
                      value={formData.desc}
                      onChange={e => onChangeHandler(e)}
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

AddProductDetail.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getWarrantys: PropTypes.func.isRequired,
  addProductDetail: PropTypes.func.isRequired
  // setCurrentProductDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  warrantys: state.warranty.warrantys,
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { addProductDetail, getProducts, getWarrantys }
)(AddProductDetail);
