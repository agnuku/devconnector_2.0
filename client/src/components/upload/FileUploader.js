import React, { Component } from "react";
import "./FileUploader.module.css";
import Upload from "./Upload";
import Card from "react-bootstrap/Card";
import "./Upload.css";

class FileUploader extends Component {
  render() {
    return (
      <div
        className="container "
        style={{
          height: "78vh"
        }}
      >
        <br />
        <br />
        <br />
        <Card className="text-center">
          <Card.Header>Upload Product Cost</Card.Header>
          <Card.Body>
            <Upload />
          </Card.Body>
          <Card.Footer className="text-muted" />
        </Card>
      </div>
    );
  }
}

export default FileUploader;
