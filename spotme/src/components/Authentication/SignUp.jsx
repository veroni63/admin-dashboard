import React from "react";
import { Row, Col,  Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authentication.css";
function SignUp() {
  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName">Sign Up</span>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Username" />
                <Form.Control
                  type="email"
                  placeholder="Email Address or Phone Number"
                />
                <Form.Control type="password" placeholder="Password" />
                <Form.Text>
                  You agree to the{" "}
                  <span className="colortext">terms of services</span> and
                  <br></br>
                  <span className="colortext">privacy policy</span>
                </Form.Text>

                <button className="mt-3 mb-3">Get Started</button>
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

export default SignUp;
