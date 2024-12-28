import React from "react";
import { Row, Col,  Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authentication.css";
function NewPassword() {
  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName mb-1">New Password</span>
            <Form.Text className="mb-4">
              Now you can reset your new password
            </Form.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="password" placeholder="Password" />
                <Form.Control
                  type="password"
                  placeholder="Reconfirm Password"
                />
                <button className="mt-3 mb-3">Reset Password</button>
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

export default NewPassword;
