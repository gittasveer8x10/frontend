import React from "react";
import { Container, Button, Nav, Row, Col } from "react-bootstrap";
import { SocialIcons } from "./SocialIcons";
<link rel="stylesheet" href="../customised-css/Footer.css" />;
export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    //top:"150vh",
    width: "100%",
  };

  return (
    <footer
      id="footer"
      className="bg-primary text-light py-3"
      style={footerStyle}
    >
      <div id="parent" className="d-block">
        <div id="col-1"></div>
        <div id="col-2">
          <Container className="d-flex justify-content-center ">
            <Nav.Link>
              <Button variant="light">Home</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="light">Product</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="light">Pricing</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="light">About </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="light">Team</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="light">Contact</Button>
            </Nav.Link>
          </Container>
        </div>
        <div id="col-3" className=" justify-content-end ">
          {" "}
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};
