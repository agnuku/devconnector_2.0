import React, { Component } from "react";
import axios from "axios";
import "./Upload.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentProfile } from "../../actions/profile";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      disabled: false
    };
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  maxSelectFile = event => {
    let files = event.target.files; // create file object
    if (files.length > 6) {
      const msg = "Max 6 csv files can be uploaded at a time";
      event.target.value = null; // discard selected file
      toast.warn(msg);
      return false;
    }
    return true;
  };
  checkMimeType = event => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = []; // create empty array
    // list allow mime type
    const types = [".csv", "text/csv"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't match
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + " is not a supported format\n";
        // assign message to array
      }
    }

    for (var z = 0; z < err.length; z++) {
      // loop create toast message
      // if message not same that means there is an error
      event.target.value = null; // discard selected file
      toast.error(err[z]);
    }
    return true;
  };
  checkFileSize = event => {
    let files = event.target.files;
    let size = 50000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] =
          files[x].type +
          "files size too large, please upload one file at a time (or break your single large file into multiple files)\n";
      }
    }
    for (var z = 0; z < err.length; z++) {
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  onChangeHandler = event => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0
      });
    }
  };
  onClickHandler = () => {
    const { user } = this.props.auth;
    if (this.state.selectedFile === null) {
      this.setState({
        loaded: 0,
        selectedFile: null
      });
      toast.error("Please (re)select csv file");

      return;
    }
    {
      const data = new FormData();
      for (var x = 0; x != null && x < this.state.selectedFile.length; x++) {
        data.append("file", this.state.selectedFile[x]);
        data.append("id", user._id);
      }
      axios
        .post("http://localhost:5000/upload-csv", data, {
          onUploadProgress: ProgressEvent => {
            this.setState({
              loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
            });
          }
        })
        .then(res => {
          console.log(res.body);
          toast.success("upload success");
          this.setState({
            selectedFile: null
          });
        })
        .catch(err => {
          toast.error("upload fail");
        });
    }
  };

  render() {
    const now = this.state.loaded;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form method="post" action="#" id="#">
              <div className="form-group files">
                <ToastContainer />

                <input
                  type="file"
                  className="btn btn-outline-primary"
                  onChange={this.onChangeHandler}
                />
              </div>
              <div className="form-group">
                <ProgressBar
                  variant="success"
                  now={now}
                  label={`${Math.round(now)}%`}
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                block
                onClick={this.onClickHandler}
                ref={btn => {
                  this.btn = btn;
                }}
              >
                Submit File
              </Button>
            </form>{" "}
          </div>
        </div>
      </div>
    );
  }
}
Upload.propTypes = {
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
)(Upload);
