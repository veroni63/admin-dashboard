import React from "react";
import { Row, Col,  Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authentication.css";
function Login() {
  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName">Login </span>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Group className="mb-3">
                  <Form.Label className="colortextlabel">
                    Email address or Phone Number
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="colortextlabel">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter the Password"
                  />
                </Form.Group>
                <a href="#">
                  <div className="colortext ForgetPass  ">Forget Password</div>
                </a>
                <button className="mt-3 mb-3">Sign in</button>
                <Form.Text>
                  Already a member? <span className="colortext"> Sign in</span>
                </Form.Text>
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

export default Login;
