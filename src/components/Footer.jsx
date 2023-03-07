import React from "react";
import { Col, Container, Row, Stack, NavLink } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Stack gap={4} className="bg-cream p-5">
        <h2 className="text-light text-center">Kristens Creations</h2>
        <Container fluid="xs" className=" text-center w-100">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <NavLink className="text-light text-center">Home</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">About</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">Gallery</NavLink>
            </Col>
            <Col md="auto">
              <NavLink className="text-light text-center">Contact</NavLink>
            </Col>
          </Row>
        </Container>
        <Container className="text-center">
          <Row>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/facebook-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a>
                <img
                  style={{ width: "2em" }}
                  src="https://elitecnd.com/wp-content/themes/custom-theme/assets/images/instagram-logo.svg"
                />
              </a>
            </Col>
            <Col>
              <a href="mailto:calebcampbellcrm@gmail.com">
                <i className="material-icons text-light fs-1">email</i>
              </a>
            </Col>
            <Col>
              <a href="tel:+1-509-714-2644">
                <i className="fas fa-phone-alt text-light fs-2 mb-3"></i>
              </a>
            </Col>
          </Row>
        </Container>
        <p className="fs-6 text-center mt-5 mb-0 text-light">
          Copyright © 2023 — Kristens Creations, All Rights Reserved
        </p>
      </Stack>
    </>
  );
}
