import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editProductDetail,
  getCurrentProductDetail
} from "../../_actions/productActions/productDetailAction";

const EditProductDetail = ({
  productdetail: { productdetail, loading },
  editProductDetail,
  getCurrentProductDetail,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    partName: "",
    productName: "",
    desc: ""
  });

  useEffect(() => {
    getCurrentProductDetail(match.params.id);
    setFormData({
      partName:
        loading || !productdetail.partName ? "" : productdetail.partName,
      productName:
        loading || !productdetail.productName ? "" : productdetail.productName,
      desc: loading || !productdetail.desc ? "" : productdetail.desc
    });
    //eslint-disable-next-line
  }, [loading, getCurrentProductDetail]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editProductDetail(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit ProductDetail Branch
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
                    <div className="form-group col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        name="desc"
                        value={formData.desc}
                        onChange={e => onChangeHandler(e)}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    Edit & Submit
                  </button>
                </form>
              </div>
              {/*-- Modal Body Ends  -*/}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

EditProductDetail.propTypes = {
  editProductDetail: PropTypes.func.isRequired,
  getCurrentProductDetail: PropTypes.func.isRequired,
  productdetail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productdetail: state.productdetail
});

export default connect(
  mapStateToProps,
  { editProductDetail, getCurrentProductDetail }
)(withRouter(EditProductDetail));
