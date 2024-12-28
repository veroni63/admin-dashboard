import React, { useState } from "react";
import { Row, Col,  Form } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authentication.css";

function SetupProfile() {
  const [profilePicture, setProfilePicture] = useState('/assets/images/userprofileIcon.png');
  const [previewUrl, setPreviewUrl] = useState(
    "/assets/images/userprofileIcon.png"
  );

  // Handle profile picture upload
  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="headerName">SPOTME</div>
      <div className="parent-container">
        <Row className="bg-container bg-updatedcontainer">
          <Col md={6} className="d-flex flex-column justify-content-center">
            <span className="titleName">Setup Profile</span>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <div className="profileImg">
                  <img
                    src={previewUrl}
                    alt="Profile"
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="upload-button"
                  onChange={handleProfileUpload}
                />
                <label htmlFor="upload-button" className="editbutton">
                  <div style={{ marginLeft: "7px", marginTop: "4px" }}>
                    <FaPencilAlt />
                  </div>
                </label>

                <Form.Control type="text" placeholder="Full Name" />
                <Form.Control type="text" placeholder="Gender" />
                <Form.Control type="tel" placeholder="Date of Birth" />
                <Form.Control
                  as="textarea"
                  className="textarea form-control mb-3"
                  placeholder="Your Bio"
                ></Form.Control>
                <button className="mt-3 mb-3">Get Started</button>
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

export default SetupProfile;
