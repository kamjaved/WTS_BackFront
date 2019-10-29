import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  editCategory,
  getCurrentCategory
} from "../../_actions/CustomerAction//categoryAction";

const EditCategory = ({
  category: { category, loading },
  editCategory,
  getCurrentCategory,
  history,
  match
}) => {
  const [formData, setFormData] = useState({
    category: ""
  });

  useEffect(() => {
    getCurrentCategory(match.params.id);
    setFormData({
      category: loading || !category.category ? "" : category.category
    });
    //eslint-disable-next-line
  }, [loading, getCurrentCategory]);

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editCategory(formData, history, match.params.id);
  };

  return (
    <Fragment>
      <div className="container-fluid m-auto">
        <div>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLongTitle">
                  Edit Category
                </h3>
                <Link className="btn btn-light" to="/location/categorymaster">
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
                      value={formData.category}
                      onChange={e => onChangeHandler(e)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
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

EditCategory.propTypes = {
  editCategory: PropTypes.func.isRequired,
  getCurrentCategory: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { editCategory, getCurrentCategory }
)(withRouter(EditCategory));
