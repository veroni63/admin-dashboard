import React from "react";
import { Row, Col,  Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authentication.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Otp() {
  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName">Enter your OTP</span>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Text>
                  You have received a 4 digit OTP code.
                  <br></br>
                  Please enter it
                </Form.Text>
                <Row className="otpInputGroup">
                  <Form.Control className="otpInput" type="number" />
                  <Form.Control className="otpInput" type="number" />
                  <Form.Control className="otpInput" type="number" />
                  <Form.Control className="otpInput" type="number" />
                </Row>
                <button className="mt-3 mb-3">Continue</button>
              </Form.Group>
            </Form>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src="/assets/images/AuthpgImg.png"
              alt="Authentication Page"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Otp;
