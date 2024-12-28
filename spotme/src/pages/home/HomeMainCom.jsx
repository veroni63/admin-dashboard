import React from "react";
import {Container,
  Row,
  Col,
  Card,
  Table,
  Image,
  ListGroup,
  Modal,
  Form,
  Button,
  Badge,
} from "react-bootstrap";
import {
  FaPlus,
  FaSearch,
} from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "./home.css"; // Custom CSS file for additional styling
import { useState } from "react";
import GenderPieChart from "./charts/GenderPieChart";
import AppPieChart from "./charts/AppPieChart";
import  BarChart  from "./charts/BarChart";


const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRankModal, setShowRankModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseRankModal = () => setShowRankModal(false);
  const handleShowRankModal = () => setShowRankModal(true);
  const handleSelectAdmin = (admin) => {
    setSelectedAdmin(admin);
    handleShowRankModal();
    handleCloseModal();
  };

  const stats = [
    {
      title: "Total Users",
      value: 500,
      icon: "/assets/images/customer.png",
      change: "10%",
      duration: "30 days",
    },
    {
      title: "Total Requests",
      value: 1200,
      icon: "/assets/images/additionTotal.png",
      color: "success",
      change: "24%",
      duration: "30 days",
    },
    {
      title: "Total Reports",
      value: 30,
      icon: "/assets/images/exclamationTotal.png",
      color: "danger",
      change: "30%",
      duration: "30 days",
    },
    {
      title: "Total Support",
      value: 10,
      icon: "/assets/images/customer-serviceTotal.png",
      color: "warning",
      change: "2%",
      duration: "30 days",
    },
    {
      title: "Premium Users",
      value: 43,
      icon: "/assets/images/crownTotal.png",
      color: "info",
      change: "14%",
      duration: "30 days",
    },
  ];

  return (
    <Container className="dashboard-container">
      <Row className="mb-3">
        <Col>
          <h4 className="page-title">Main Dashboard</h4>
        </Col>
      </Row>

      {/* Top Stats */}
      <Row className="overAllTotalRow mb-1">
        {stats.map((stat, idx) => (
          <div key={idx} className="mb-3 col stat-card ">
            <Card className="overAllTotal text-white">
              <Card.Body className="d-flex align-items-center">
                <div className="me-3 stat-icon-bg">
                  <div id={`icon-bg${idx}`} className="stat-icon">
                    <img id={`item${idx}`} src={stat.icon} />
                  </div>
                </div>
                <div>
                  <Card.Title className="stat-title">{stat.title}</Card.Title>
                  <h3 className="stat-value">{stat.value}</h3>
                  <div className="small">
                    <img
                      style={{ width: "15px" }}
                      src="/assets/images/up-arrowTotal.png"
                    />{" "}
                    <span style={{ color: "#05CD99", fontWeight: "700" }}>
                      {stat.change}{" "}
                    </span>
                    <span style={{ color: "#A3AED0" }}>({stat.duration})</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>

      {/* Charts */}
      <Row className="mb-4  ">
        <Col md={4}>
          <Card className="chart-card">
            <Card.Body>
              <Card.Title className="pieChartTitle">
                Gender Pie Chart
              </Card.Title>
              <GenderPieChart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="chart-card">
            <Card.Body>
              <Card.Title className="pieChartTitle">Age Pie Chart</Card.Title>
              <AppPieChart />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="chart-card">
            <Card.Body>
              <Card.Title>Daily Traffic</Card.Title>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Trending Requests */}
      <Row className="mb-4">
        <Col>
          <Card className="trending-card shadow-sm">
            <Card.Body>
              <Card.Title className="trending-title">
                Trending Requests
              </Card.Title>
              <Table responsive hover className="trending-table text-center">
                <thead>
                  <tr className="text-center">
                    <th>Request ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Age</th>
                    <th>Radius</th>
                    <th>Interested</th>
                    <th>User</th>
                    <th>Rating</th>
                    <th>Address</th>
                    <th>Report</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th> {/* Empty header for the options column */}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, idx) => (
                    <tr key={idx} className="trending-row">
                      <td>#34</td>
                      <td>
                        <Image
                          src="/assets/images/report.png"
                          alt="Product"
                          roundedCircle
                          className="trending-image"
                        />
                      </td>
                      <td>Gucci bag</td>
                      <td>30</td>
                      <td>20km</td>
                      <td>10</td>
                      <td>Yuvi</td>
                      <td>5 Star</td>
                      <td>Model town, Delhi</td>
                      <td>0</td>
                      <td>Active</td>
                      <td>12/12/22</td>
                      <td className="text-center">
                        <FaEllipsisV className="options-icon" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* World Domination & Top Cities */}
      <Row className="mb-4">
        <Col lg={8}>
          <Card className="p-3 mb-4 shadow-sm position-relative">
            <Card.Body>
              <span className="world-domination">World Domination</span>
              <div className="world-map position-relative">
                {/* Replace with an actual map  component or image */}
                <img
                  src="/assets/images/world-map.png"
                  style={{
                    width: "400px",
                    height: "230px",
                    marginLeft: "-280px",
                  }}
                  fluid
                />
                {/* Top 5 City Overlay */}
                <div className="top-cities-overlay">
                  <Card className="top-cities-card">
                    <Card.Body>
                      <span className="topcity">Top 5 City</span>
                      <div className="city-list">
                        <div className="city-item ">
                          Delhi <span className="city-percentage">24%</span>
                        </div>
                        <div className="city-item">
                          Mumbai <span className="city-percentage">21%</span>
                        </div>
                        <div className="city-item">
                          Bihar <span className="city-percentage">11%</span>
                        </div>
                        <div className="city-item">
                          Chennai <span className="city-percentage">9%</span>
                        </div>
                        <div className="city-item">
                          Bangalore <span className="city-percentage">7%</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* {Add Admin modal} */}

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <div className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="me-2"
                />
                <Button variant="outline-primary">
                  <FaSearch />
                </Button>
              </div>
            </Form.Group>
            <ListGroup variant="flush">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectAdmin(`Admin ${idx + 1}`)}
                >
                  "Adela Parkson" role="Creative Director"{" "}
                </div>
              ))}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Select</Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        {/* {Add Rank Modal} */}
        <Modal show={showRankModal} onHide={handleCloseRankModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Rank</Modal.Title>
          </Modal.Header>
          <Modal.Body md={6}>
            <Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Check type="checkbox" id="rank1" label="Rank 1" />
                <span>
                  Privileges: limit or delete request, manage support ticket,
                  manage reports tickets
                </span>
              </div>
              <Form.Check type="checkbox" id="rank2" label="Rank 2" />
              <Form.Check type="checkbox" id="rank3" label="Rank 3" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseRankModal}>
              Done
            </Button>
            <Button variant="secondary" onClick={handleCloseRankModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <Col lg={4}>
          <Card className="p-3 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title>Admin Team Member</Card.Title>
                <FaPlus className="text-primary" onClick={handleShowModal} />
              </div>
              <ListGroup variant="flush" className="mt-4">
                {[1, 2, 3].map((member, idx) => (
                  <ListGroup.Item key={idx} className="p-0 mb-2 border-0">
                    <Card className="d-flex flex-row shadow-sm">
                      <Image
                        src="/assets/images/reports.png"
                        alt="Admin"
                        roundedCircle
                        className="admin-image me-3"
                      />
                      <Card.Body className="d-flex flex-column justify-content-center">
                        <Card.Title className="mb-1">Adela Parkson</Card.Title>
                        <Card.Subtitle className="text-muted">
                          Creative Director
                        </Card.Subtitle>
                      </Card.Body>
                      <FaEllipsisV className="text-muted ms-auto me-2 mt-4" />
                    </Card>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* {Recent Report} */}
      <Row className="mb-4 recent-report">
        <Col lg={12}>
          <Card
            className="p-3 shadow-sm"
            style={{ width: "879px", height: "418px" }}
          >
            <Card.Body>
              <span className="world-domination">World Domination</span>
              <Table responsive hover className="reports-table">
                <thead>
                  <tr>
                    <th>Report No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>User</th>
                    <th>Rating</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, idx) => (
                    <tr key={idx}>
                      <td>#56</td>
                      <td>
                        <Image
                          src="/assets/images/report.png"
                          alt="Product"
                          roundedCircle
                          className="report-image"
                        />
                      </td>
                      <td>Gucci bag</td>
                      <td>Yuvi</td>
                      <td>
                        <Badge bg="success" className="rating-badge">
                          5 Star
                        </Badge>
                      </td>
                      <td>Model town, Delhi</td>
                      <td>
                        <Badge
                          bg={
                            item === 1
                              ? "success"
                              : item === 2
                              ? "warning"
                              : "danger"
                          }
                          className="status-badge"
                        >
                          {item === 1
                            ? "Resolved"
                            : item === 2
                            ? "Pending"
                            : "Open"}
                        </Badge>
                      </td>
                      <td>12/12/22</td>
                      <td className="text-center">
                        <FaEllipsisV className="options-icon" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
