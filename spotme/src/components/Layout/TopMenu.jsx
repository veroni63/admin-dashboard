import { Container, Navbar, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import Form from "react-bootstrap/Form";

function TopMenu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary top-menu">
        <Container fluid>
          <Navbar.Brand href="#" className="ms-3 spotme">
            Admin view
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-between"
          >
            <Form className="d-flex align-items-center  ms-5">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="rounded-pill search-button ps-5"
                  aria-label="Search"
                />
                <FaSearch className="search-icon" />
              </InputGroup>
            </Form>

            {/* Additional Elements */}
            <div className="d-flex align-items-center me-3 ">
              <div className="d-flex  me-4">
                <img
                  src="/assets/images/checklist 1.png"
                  alt="Check"
                  className="icon check-icon  me-3"
                />
                <img
                  src="/assets/images/sos (1) 1.png"
                  alt="Circle"
                  className="icon circle-icon me-0 "
                />
              </div>
              <div className="user-info ms-2">
                <span className="user-name  ">Alexa </span>
                <span className="user-domain "> Super Admin</span>
              </div>
              <img
                src="/assets/images/Avatar Style 6.png"
                alt="Profile"
                className="icon profile-icon ms-2 me-2"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopMenu;
