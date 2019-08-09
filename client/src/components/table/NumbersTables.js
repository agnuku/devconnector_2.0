import React, { Fragment, Component } from "react";
import "./NumbersTable.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { NavLink, Link } from "react-router-dom";

class DeckTables extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      lgShow: false
    };
  }
  render() {
    return (
      <Fragment>
        <div
          style={{
            marginTop: 30,

            borderRadius: "0.20em",
            //textAlign: "center",
            color: "#032f3e",
            //border: "1px solid #bdbbb9",
            padding: "3em",
            margin: "10px"
          }}
        >
          <Row>
            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <b>MTD Income Statement</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/table">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/table"
                  to="/table"
                  style={{ textDecoration: "none", color: "#000" }}
                />
              </Card>
            </Col>

            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em",
                borderLeft: "0px"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    {" "}
                    <Col>
                      <b>Inventory - Sell Through</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/table">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/table"
                  to="/table"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <table id="TheTable" border="1" className="ExcelTable2007">
                    <tbody>
                      <tr>
                        <th className="ExcelTable2007 heading">&nbsp;</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                      </tr>
                      <tr>
                        <td align="left" valign="bottom" className="heading">
                          1
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;ASIN &nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;DOH&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;REV($)&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;COST($)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;PROFIT($)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;MARGIN(%)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;UNITS&nbsp;&nbsp;&nbsp;</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">2</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          50
                        </td>
                        <td align="right" valign="bottom">
                          72
                        </td>
                        <td align="right" valign="bottom">
                          -12
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">3</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">4</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">5</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          231,483
                        </td>
                        <td align="right" valign="bottom">
                          79
                        </td>
                        <td align="right" valign="bottom">
                          35203
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          166,313
                        </td>
                        <td align="right" valign="bottom">
                          134
                        </td>
                        <td align="right" valign="bottom">
                          35813
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">7</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          191,544
                        </td>
                        <td align="right" valign="bottom">
                          112
                        </td>
                        <td align="right" valign="bottom">
                          36601
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">8</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="heading">9</td>
                        <td align="left" valign="bottom">
                          B077RDG3PQ
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="heading">10</td>
                        <td align="left" valign="bottom">
                          OTHERS
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="heading">11</td>
                        <td align="left" valign="bottom">
                          <b>Total</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <b>MTD Income Statement</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/table">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/table"
                  to="/table"
                  style={{ textDecoration: "none", color: "#000" }}
                />
              </Card>
            </Col>

            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em",
                borderLeft: "0px"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    {" "}
                    <Col>
                      <b>Inventory - Consolidated Overview</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/table">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/table"
                  to="/table"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <table id="TheTable" border="1" className="ExcelTable2007">
                    <tbody>
                      <tr>
                        <th className="ExcelTable2007 heading">&nbsp;</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                      </tr>
                      <tr>
                        <td align="left" valign="bottom" className="heading">
                          1
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp; &nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;UNITS&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;DOLLARS($)&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">2</td>
                        <td align="left" valign="bottom">
                          <b>Begin Inventory</b>
                        </td>
                        <td align="right" valign="bottom">
                          50
                        </td>
                        <td align="right" valign="bottom">
                          72
                        </td>
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">3</td>
                        <td align="left" valign="bottom">
                          Purchases
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">4</td>
                        <td align="left" valign="bottom">
                          <b>Total</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">5</td>
                        <td align="left" valign="bottom">
                          Sold
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom">
                          <b>End Inventory</b>
                        </td>
                        <td align="right" valign="bottom">
                          231,483
                        </td>
                        <td align="right" valign="bottom">
                          79
                        </td>
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    {" "}
                    <Col>
                      <b>MTD Income Statement</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/table">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/table"
                  to="/table"
                  style={{ textDecoration: "none", color: "#000" }}
                />
              </Card>
            </Col>

            <Col
              sm={6}
              style={{
                borderRadius: "0.20em",
                textAlign: "center",
                color: "#032f3e",
                //border: "1px solid #bdbbb9",
                padding: "0.7em",
                borderLeft: "0px"
              }}
            >
              <Card>
                <Card.Header>
                  <Row>
                    <Col>
                      <b>Inventory - Available to Sell</b>
                    </Col>
                    <Col>
                      <div
                        className="text-right"
                        style={{
                          padding: "0.2em",
                          marginRight: "5px"
                        }}
                      >
                        <i
                          className="fa fa-pie-chart"
                          aria-hidden="true"
                          onClick={() => this.setState({ lgShow: true })}
                        />
                        <NavLink to="/linechart">
                          {" "}
                          <i
                            className="fa fa-line-chart"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                        <NavLink to="/profitloss">
                          <i
                            className="fas fa-file-excel"
                            aria-hidden="true"
                            style={{
                              padding: "0.2em",
                              marginLeft: "2px",
                              textDecoration: "none",
                              color: "#000"
                            }}
                          />
                        </NavLink>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body
                  className="center"
                  as={Link}
                  href="/pl-ytd"
                  to="/pl-ytd"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <table id="TheTable" border="1" className="ExcelTable2007">
                    <tbody>
                      <tr>
                        <th className="ExcelTable2007 heading">&nbsp;</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                      </tr>
                      <tr>
                        <td align="left" valign="bottom" className="heading">
                          1
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;AGED&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;UNITS&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;AUR($)&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;VALUE($)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;COST($)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;PROFIT($)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                        <td align="right" valign="bottom">
                          <b>&nbsp;&nbsp;&nbsp;MARGIN(%)&nbsp;&nbsp;&nbsp;</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">2</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">3</td>
                        <td align="left" valign="bottom">
                          <b>0 - 10</b>
                        </td>
                        <td align="right" valign="bottom">
                          50
                        </td>
                        <td align="right" valign="bottom">
                          72
                        </td>
                        <td align="right" valign="bottom">
                          -12
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">4</td>
                        <td align="left" valign="bottom">
                          <b> 11 - 20</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">5</td>
                        <td align="left" valign="bottom">
                          <b> 21 -30</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">6</td>
                        <td align="left" valign="bottom">
                          <b>31 - 60</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          361
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">7</td>
                        <td align="left" valign="bottom">
                          <b> 61 - 90</b>
                        </td>
                        <td align="right" valign="bottom">
                          231,483
                        </td>
                        <td align="right" valign="bottom">
                          79
                        </td>
                        <td align="right" valign="bottom">
                          35203
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">8</td>
                        <td align="left" valign="bottom">
                          <b> 91 - 180 </b>
                        </td>
                        <td align="right" valign="bottom">
                          166,313
                        </td>
                        <td align="right" valign="bottom">
                          134
                        </td>
                        <td align="right" valign="bottom">
                          35813
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">9</td>
                        <td align="left" valign="bottom">
                          <b> 180 - 365</b>
                        </td>
                        <td align="right" valign="bottom">
                          191,544
                        </td>
                        <td align="right" valign="bottom">
                          112
                        </td>
                        <td align="right" valign="bottom">
                          36601
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="ExcelTable2007 heading">10</td>
                        <td align="left" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                        <td align="right" valign="bottom" />
                      </tr>
                      <tr>
                        <td className="heading">9</td>
                        <td align="left" valign="bottom">
                          Liquidate
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="heading">10</td>
                        <td align="left" valign="bottom">
                          Misc
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                      <tr>
                        <td className="heading">11</td>
                        <td align="left" valign="bottom">
                          <b>Total</b>
                        </td>
                        <td align="right" valign="bottom">
                          200,127
                        </td>
                        <td align="right" valign="bottom">
                          97
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          36119
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                        <td align="right" valign="bottom">
                          21
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default DeckTables;
