import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCategorys,
  addCategory,
  deleteCategory,
  setCurrentCategory
} from "../../_actions/CustomerAction//categoryAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CategoryMaster = ({
  getCategorys,
  deleteCategory,
  setCurrentCategory,
  categorys,
  filtered,
  loading,
  history
}) => {
  useEffect(() => {
    getCategorys();
    //eslint-diable-next-line
  }, [getCategorys]);

  const onDeleteHandler = id => {
    deleteCategory(id);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/customer/addCategory">
            <i className="fa fa-plus mr-2"> </i>Add Category
          </Link>

          <Link to="/customer/customerMaster">
            <button className="btn btn-dark ml-2">Customer Master</button>
          </Link>
          <Link to="/customer/customerBranchMaster">
            <button className="btn btn-dark ml-2">
              Customer Branch Master
            </button>
          </Link>

          <h1 className="pt-4">Category Master</h1>
          <small className="lead">Add new Category into Database</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Category</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {categorys.map(category => (
                <tr key={category._id}>
                  <td>{category.category}</td>
                  <td className="text-right">
                    <Link
                      to={`/customer/editCategory/${category._id}`}
                      onClick={() => setCurrentCategory(category)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(category._id)}
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

CategoryMaster.propTypes = {
  getCategorys: PropTypes.func.isRequired,
  addCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  setCurrentCategory: PropTypes.func.isRequired,
  categorys: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  categorys: state.category.categorys,
  category: state.category.category,
  filtered: state.category.filtered,
  loading: state.category.loading
});
export default connect(
  mapStateToProps,
  { getCategorys, addCategory, deleteCategory, setCurrentCategory }
)(CategoryMaster);
