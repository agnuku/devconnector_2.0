import React, { Component } from "react";
import "./applayout.css";

import WithLoading from "./WithLoading.js";
import AmzSalesReports from "./ExampleComponent";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../../actions/profile";

const AmzReportsWithLoading = WithLoading(AmzSalesReports);

class GetFreshdata extends Component {
  state = {
    loading: false,
    products: []
  };

  componentDidMount() {
    this.props.getCurrentProfile();
    this.setState({ loading: true });
    axios.get("http://localhost:5000/tracks").then(response => {
      this.setState({
        loading: false,
        products: response.data
      });
    });
  }
  render() {
    return (
      <AmzReportsWithLoading
        isLoading={this.state.loading}
        products={this.state.products}
      />
    );
  }
}

GetFreshdata.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(GetFreshdata);
