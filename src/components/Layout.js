import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={10}>
          <Navbar />
          {props.children}
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
