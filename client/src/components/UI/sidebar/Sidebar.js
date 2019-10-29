import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../_actions/authAction";
import $ from "jquery";

class Sidebar extends Component {
  componentWillMount() {
    this.onCloseSidebar();
  }

  onLogoutHandler = e => {
    e.preventDefault();
    this.props.logout();
  };

  onCloseSidebar = e => {
    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  };

  onDropDown = e => {
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(100);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user);

    let result;

    if (isAuthenticated === true) {
      result = (
        <div>
          <div className="page-wrapper chiller-theme toggled">
            <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
              <i className="fas fa-bars"></i>
            </Link>
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <Link to="/">WTS Solution</Link>

                  <div
                    id="close-sidebar"
                    onClick={this.onCloseSidebar.bind(this)}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="sidebar-header">
                  <div className="user-pic">
                    <img
                      className="img-responsive img-rounded"
                      src="https://static.businessinsider.com/image/585c51bbee14b617038b4f80/image.jpg"
                      alt="User"
                    />
                  </div>
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-role">{user.role}</span>
                    <span className="user-status">
                      <i className="fa fa-circle"></i>
                      <span>Online</span>
                    </span>
                  </div>
                </div>
                {/*-- sidebar-header  -*/}
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*-- sidebar-search  -*/}
                <div className="sidebar-menu">
                  <ul>
                    <li>
                      <Link to="./table">
                        <i className="fa fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li className="header-menu">
                      <span>Master Form</span>
                    </li>

                    <li
                      className="sidebar-dropdown"
                      onClick={this.onDropDown.bind(this)}
                    >
                      <Link to="#">
                        <i className="fa fa-compass"></i>
                        <span>Location Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/location/statemaster">State Master</Link>
                          </li>
                          <li>
                            <Link to="/location/citymaster">City Master</Link>
                          </li>
                          <li>
                            <Link to="/location/locationmaster">
                              City Location Master
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="./table">
                        <i className="fa fa-music"></i>
                        <span>Plantronics Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/company/plantronicsbranch">
                              Plantronics Branch
                            </Link>
                          </li>
                          <li>
                            <Link to="/company/employee">Employee Detail</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="./table">
                        <i className="fa fa-users"></i>
                        <span>Supplier Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/supplier/supplierMaster">
                              Supplier Master
                            </Link>
                          </li>
                          <li>
                            <Link to="/supplier/supplierBranchMaster">
                              Supplier Branch
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="#">
                        <i className="fa fa-user"></i>
                        <span>Customer Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/customer/categoryMaster">
                              Category Type
                            </Link>
                          </li>
                          <li>
                            <Link to="/customer/customerMaster">
                              Customer Master
                            </Link>
                          </li>
                          <li>
                            <Link to="/customer/customerBranchMaster">
                              Customer Branch
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="#">
                        <i className="fa fa-shopping-cart"></i>
                        <span>Product Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/product/warrantyMaster">
                              Warranty Scheme
                            </Link>
                          </li>
                          <li>
                            <Link to="/product/productMaster">
                              Product Type
                            </Link>
                          </li>
                          <li>
                            <Link to="/product/productBranchMaster">
                              Product Detail
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="#">
                        <i className="fa fa-id-card"></i>
                        <span>User Details</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/user/industry-type">Industry Type</Link>
                          </li>
                          <li>
                            <Link to="/user/user-type-master">
                              User Type Master
                            </Link>
                          </li>
                          <li>
                            <Link to="/user/user-creation">User Creation</Link>
                          </li>
                          <li>
                            <Link to="/user/user-detail">Unlock User</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link to="./table">
                        <i className="fa fa-eye"></i>
                        <span>Assign Role</span>
                      </Link>
                    </li>

                    <li className="header-menu">
                      <span>Extra</span>
                    </li>

                    <li className="sidebar-dropdown">
                      <Link to="#">
                        <i className="fa fa-sort"></i>
                        <span>Schedule Management</span>
                      </Link>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <Link to="/schedule/visit">Visit Schedule </Link>
                          </li>
                          <li>
                            <Link to="/schedule/tag">Headset Tag Schedule</Link>
                          </li>
                          <li>
                            <Link to="/schedule/tag">View Schedule</Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <Link to="./table">
                        <i className="fa fa-flag"></i>
                        <span>Reports</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*-- sidebar-menu  -*/}
              </div>
              {/*-- sidebar-Content  -*/}
              <div className="sidebar-footer">
                <Link to="./table">
                  <i className="fa fa-bell"></i>
                  <span className="badge badge-pill badge-warning notification">
                    3
                  </span>
                </Link>
                <Link to="./table">
                  <i className="fa fa-envelope"></i>
                  <span className="badge badge-pill badge-success notification">
                    7
                  </span>
                </Link>
                <Link to="./table">
                  <i className="fa fa-cog"></i>
                  <span className="badge-sonar"></span>
                </Link>
                <Link
                  onClick={this.onLogoutHandler.bind(this)}
                  to="#"
                  className="tooltip-test"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Logout"
                >
                  <i className="fa fa-power-off" />
                </Link>
              </div>
            </nav>
            {/*-- sidebar-wrapper  -*/}
            <main className="page-content">
              <div className="">{this.props.children}</div>
            </main>
            {/*-- Page Content  -*/}
          </div>
        </div>
      );
    } else {
      result = (
        <Fragment>
          <div>
            <div className="page-wrapper chiller-theme toggled">
              <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
                <i className="fas fa-bars"></i>
              </Link>
              <nav id="sidebar" className="sidebar-wrapper">
                <div className="sidebar-content">
                  <div className="sidebar-brand">
                    <Link to="/">WTS Solution</Link>

                    <div
                      id="close-sidebar"
                      onClick={this.onCloseSidebar.bind(this)}
                    >
                      <i className="fas fa-times"></i>
                    </div>
                  </div>

                  {/*-- sidebar-header  -*/}

                  {/*-- sidebar-search  -*/}
                  <div className="sidebar-menu">
                    <ul>
                      <li>
                        <Link to="/login">
                          <i className="fa fa-tachometer-alt"></i>
                          <span>Login</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/register">
                          <i className="fa fa-compass"></i>
                          <span>Register</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/*-- sidebar-menu  -*/}
                </div>
                {/*-- sidebar-Content  -*/}
              </nav>
              {/*-- sidebar-wrapper  -*/}
              <main className="page-content">
                <div className="">{this.props.children}</div>
              </main>
              {/*-- Page Content  -*/}
            </div>
          </div>
        </Fragment>
      );
    }

    return <Fragment>{result}</Fragment>;
  }
}

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Sidebar);
