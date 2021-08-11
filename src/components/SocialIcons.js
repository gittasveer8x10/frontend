import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialIcons = () => {
  return (
    <Container className="m-2">
      <a href="#" className=" facebook social m-3">
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: "white" }}
          size="2x"
        />
      </a>
      <a href="#" className="twitter social m-3">
        <FontAwesomeIcon
          icon={faTwitter}
          style={{ color: "white" }}
          size="2x"
        />
      </a>
      <a href="#" className="linkedin social m-2">
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "white" }}
          size="2x"
        />
      </a>
    </Container>
  );
};
