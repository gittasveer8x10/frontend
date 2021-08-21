import React from "react";
import { Link } from "react-router-dom";
import "../css/RegisterScreen.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  CloseButton,
} from "react-bootstrap";

function RegisterScreen() {
  return (
    <Container id="login-box">
      <CloseButton className="my-2" />
      <Col id="left">
        <h2 className="font-weight-bold">Register</h2>
        <hr style={{ marginBottom: "6px" }} />
        <Link id="personalId">#ASDFIG</Link>
        <Form className="register-form">
          <Row>
            <i className="fas fa-user"></i>
            <Form.Group controlId="name" style={{ width: "20px" }}>
              <Form.Control type="text" placeholder="*Full name"></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <i className="fas fa-phone-alt"></i>
            <Form.Group controlId="contact" style={{ width: "20px" }}>
              <Form.Control
                type="text"
                placeholder="*Contact Number"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <i className="fas fa-envelope"></i>
            <Form.Group controlId="email" style={{ width: "20px" }}>
              <Form.Control type="email" placeholder="*Email"></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <i className="fas fa-key"></i>
            <Form.Group controlId="password" style={{ width: "20px" }}>
              <Form.Control
                type="password"
                placeholder="*Create Password"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row>
            <i className="fas fa-lock"></i>
            <Form.Group controlId="password" style={{ width: "20px" }}>
              <Form.Control
                type="password"
                placeholder="*Confirm Password"
              ></Form.Control>
            </Form.Group>
          </Row>
          <Row md={2} className="justify-content-center">
            <Button
              type="submit"
              style={{ background: "black", color: "white" }}
            >
              Register
            </Button>
          </Row>
        </Form>
        <Row className="justify-content-center my-2">
          <h6 style={{ width: "14rem", fontSize: "12px", fontWeight: "bold" }}>
            Already have an account?
            <Link style={{ color: "orange" }}>Login</Link>
          </h6>
        </Row>
        <Row className="justify-content-center">
          <h6 style={{ width: "12rem", fontSize: "12px", fontWeight: "bold" }}>
            Or Login with:
            <i className="fab fa-google mx-2"></i>
            <i className="fab fa-facebook mx-2"></i>
            <i className="fab fa-linkedin mx-2"></i>
          </h6>
        </Row>
      </Col>
      <Col id="right"></Col>
    </Container>
  );
}

export default RegisterScreen;
