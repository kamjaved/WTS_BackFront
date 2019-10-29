import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../../_actions/authAction";
import $ from "jquery";
import authsidebar from "./guestsidebar";
import GuestSidebar from "./guestsidebar";
import AuthSidebar from "./authsidebar";

class Sidebar2 extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log(user);
    return (
      <Fragment>
        {isAuthenticated ? <AuthSidebar /> : <GuestSidebar />}
      </Fragment>
    );
  }
}

Sidebar2.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Sidebar2);
