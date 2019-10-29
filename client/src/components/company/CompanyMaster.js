import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCompanys,
  deleteCompany,
  setCurrentCompany
} from "../../_actions/CompanyActions/companyAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CompanyMaster = ({
  getCompanys,
  deleteCompany,
  companys,
  setCurrentCompany
}) => {
  useEffect(() => {
    getCompanys();
    //eslint-diable-next-line
  }, [getCompanys]);

  const onDeleteHandler = id => {
    deleteCompany(id);
  };

  const notAvailableError = <small className="text-danger">NA</small>;

  return (
    <Fragment>
      <div className="container-fluid mt-4">
        <div className="form-title">
          <Link className="btn btn-primary" to="/company/addCompanyBranch">
            <i className="fa fa-plus mr-2"> </i>Add Branch
          </Link>

          <Link to="/company/employee">
            <button className="btn btn-dark ml-2">Employee Detail</button>
          </Link>

          <h1 className="pt-4">Plantronics Branch</h1>
          <small className="lead">Add new Branch of Plantronics</small>
        </div>
        <br />

        <div className="row">
          <table className="table table-hover mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Location</th>
                <th scope="col">Adress</th>
                <th scope="col">Phone</th>
                <th scope="col" className="text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {companys.map(com => (
                <tr key={com._id}>
                  <td>{!com.state ? notAvailableError : com.state.state}</td>
                  <td>{!com.city ? notAvailableError : com.city.city}</td>
                  <td>
                    {!com.location ? notAvailableError : com.location.location}
                  </td>
                  <td>{!com.address ? notAvailableError : com.address}</td>
                  <td>{!com.phone ? notAvailableError : com.phone}</td>

                  <td className="text-right">
                    <Link
                      to={`/company/editCompanyBranch/${com._id}`}
                      onClick={() => setCurrentCompany(com)}
                    >
                      <i className="far fa-edit fa-md mr-4"></i>
                    </Link>
                    <Link
                      title="Delete"
                      to="#!"
                      onClick={() => onDeleteHandler(com._id)}
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

CompanyMaster.propTypes = {
  getCompanys: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func.isRequired,
  //companys: PropTypes.array.isRequired,
  setCurrentCompany: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  companys: state.company.companys,
  filtered: state.location.filtered,
  loading: state.location.loading
});

export default connect(
  mapStateToProps,
  { getCompanys, deleteCompany, setCurrentCompany }
)(CompanyMaster);
