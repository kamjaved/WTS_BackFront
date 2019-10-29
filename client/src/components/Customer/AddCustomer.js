import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCustomer } from "../../_actions/CustomerAction/customerAction";
import { getCategorys } from "../../_actions/CustomerAction/categoryAction";

const AddCustomer = ({ addCustomer, getCategorys, categorys, history }) => {
  useEffect(() => {
    getCategorys();
    //eslint-diable-next-line
  }, [getCategorys]);

  const [formData, setFormData] = useState({
    category: "",
    name: ""
  });

  const { category, name } = formData;

  const onChangeHandler = e => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    addCustomer(formData, history);
  };

  let options = categorys.map(category => (
    <option key={category._id} value={category._id}>
      {category.category}
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
                  Add Customer
                </h3>
                <Link className="btn btn-light" to="/customer/customerMaster">
                  Back
                </Link>
              </div>

              {/*-- Modal Body Starts  -*/}
              <div className="modal-body">
                <form onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="category"
                      value={category}
                      defaultValue={{ label: "Select Dept", value: 0 }}
                      onChange={e => onChangeHandler(e)}
                    >
                      <option>Select Category</option>
                      {options}
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Customer"
                      name="name"
                      value={name}
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

AddCustomer.propTypes = {
  getCategorys: PropTypes.func.isRequired,
  addCustomer: PropTypes.func.isRequired
  // setCurrentCustomer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  categorys: state.category.categorys
});

export default connect(
  mapStateToProps,
  { addCustomer, getCategorys }
)(AddCustomer);
