import React, { Component } from "react";
import "./applayout.css";
import Spinner from "../../layout/Spinner";
import { Link } from "react-router-dom";

class GetReportsSpinner extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="btn-group btn-group-lg" />
              <Link
                className="btn lg block btn-outline-primary"
                align="center"
                to="/getreports"
              >
                Yummy Data Croissants!
              </Link>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className="row">
            <div className="col-md-10 text-center">
              <Spinner />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GetReportsSpinner;
