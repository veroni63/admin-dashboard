import React, { useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import HomeMainCom from "../../pages/home/HomeMainCom";

function SideMenu() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <HomeMainCom />;
      case "group":
        return <div>groupContent</div>;
      case "more":
        return <div> moreContent</div>;
      case "messenger":
        return <div> messengerContent</div>;
      case "report":
        return <div> reportContent</div>;
      case "online-support":
        return <div> online-supportContent</div>;
      case "bell":
        return <div> bellContent</div>;
      case "email":
        return <div> emailContent</div>;
      case "user":
        return <div> userContent</div>;
      case "settings":
        return <div> settingsContent</div>;
      default:
        return <HomeMainCom />;
    }
  };
  return (
    <div className="">
      <Row>
        <Col xs={1} sm={1} className="text-white">
          <div className="sidemenu  rounded-end">
            <Nav className="flex-column">
              <Nav.Link onClick={() => setActiveMenu("home")}>
                {/* <FaHome className="sidebar-icon" /> */}
                <img src="/assets/images/home.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("group")}>
                {/* <FaUsers className="sidebar-icon" /> */}
                <img src="/assets/images/group.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("more")}>
                <img src="/assets/images/more.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("messanger")}>
                <img
                  src="/assets/images/messenger.png"
                  className="sidebar-icon"
                />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("report")}>
                <img src="/assets/images/report.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("online-support")}>
                <img
                  src="/assets/images/online-support.png"
                  className="sidebar-icon"
                />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("bell")}>
                <img src="/assets/images/bell.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("email")}>
                <img src="/assets/images/email.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("user")}>
                <img src="/assets/images/user.png" className="sidebar-icon" />
              </Nav.Link>
              <Nav.Link onClick={() => setActiveMenu("settings")}>
                <img
                  src="/assets/images/settings.png"
                  className="sidebar-icon"
                />
              </Nav.Link>
              {/* Add more menu items as needed */}
            </Nav>
          </div>
        </Col>
        <Col xs={11} sm={11} className="main-content">
          <div className="">{renderContent()}</div>
        </Col>
      </Row>
    </div>
  );
}

export default SideMenu;
