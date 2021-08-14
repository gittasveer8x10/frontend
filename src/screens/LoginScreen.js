import React from "react";
import { Link } from "react-router-dom";
import "../css/LoginScreen.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  CloseButton,
} from "react-bootstrap";
export const LoginScreen = () => {
  return (
    <Container id="login-box">
      <CloseButton className="my-2" />
      <Col class="right">
        <br />
        <h1>Log In</h1>
        <Form>
          <Form.Group className="form-inline" controlId="name">
            <Form.Control type="text" placeholder="*Username"></Form.Control>
          </Form.Group>
          <Form.Group className="form-inline" controlId="password">
            <Form.Control
              type="password"
              placeholder="*Password"
            ></Form.Control>
          </Form.Group>
          <Link style={{ color: "orange", textDecoration: "none" }}>
            <small id="fp">Forgot Password?</small>
          </Link>
          <br />
          <Container className="justify-content-md-center ">
            <Button id="logbtn" type="submit">
              <h4>Log In</h4>
            </Button>
          </Container>
        </Form>
        <Row id="login-bottom">
          Don't have account?
          <Col>
            <Link style={{ color: "orange", textDecoration: "none" }}>
              Create one
            </Link>
          </Col>
        </Row>

        <Row id="login-botto">
          Or Log in With :
          <Col>
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook mx-2 "></i>
            <i className="fab fa-linkedin"></i>
          </Col>
        </Row>
      </Col>
      <Col id="left"></Col>
    </Container>
  );
};
