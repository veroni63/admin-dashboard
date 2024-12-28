import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./authentication.css";
function ForgetPassword() {
  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName mb-1">Forget Password ?</span>
            <Form>
              <Form.Text className="mb-4">
                No worries we will send you reset instructions
              </Form.Text>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Group className="mb-3">
                  <Form.Label className="colortextlabel">Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <button className=" mt-3 mb-3">Reset Password</button>
                <a href="#">
                  <div className="colortext LinkText">Back to Login</div>
                </a>
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

export default ForgetPassword;
