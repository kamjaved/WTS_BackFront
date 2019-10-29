import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import {
  addCategory,
  getCategorys
} from "../../_actions/CustomerAction/categoryAction";

const AddCategory = ({ addCategory, history, getCategorys }) => {
  useEffect(() => {
    getCategorys();
    //eslint-disable-next-line
  }, [getCategorys]);

  const [formData, setFormData] = useState({
    category: ""
  });

  const { category } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addCategory(formData, history);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Add Category
                </h3>
                <Link className="btn btn-light" to="/customer/categoryMaster">
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
                      placeholder="Enter Category"
                      name="category"
                      value={category}
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

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
  setCurrentCategory: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  category: state.category
});
export default connect(
  mapStateToProps,
  { addCategory, getCategorys }
)(AddCategory);
