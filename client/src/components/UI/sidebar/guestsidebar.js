import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../_actions/authAction";
import $ from "jquery";

class GuestSidebar extends Component {
  componentWillUnmount() {
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
    return (
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
}

export default GuestSidebar;
