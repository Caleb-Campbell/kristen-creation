import React from "react";
import { Container, Stack, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <>
      <Stack id="contact" className="w-100 bg-cream text-center text-light">
        <h2 className="divider text-light text-center">Contact</h2>
        <Container>
          <Row md="sm-6" className="justify-content-center">
            <Col>
              <Stack>
                <a href="tel:+1-509-714-2644">
                  <i className="fas fa-phone-alt text-light phone mb-3"></i>
                </a>
                <a className="text-light" href="tel:+1-509-714-2644">
                  (509) 714-2644
                </a>
                <p>No answer? Leave me a message</p>
              </Stack>
            </Col>
            <Col>
              <Stack>
                <a href="mailto:calebcampbellcrm@gmail.com">
                  <i className="material-icons text-light email">email</i>
                </a>
                <a
                  className="text-light"
                  href="mailto:calebcampbellcrm@gmail.com"
                >
                  calebcampbellcrm@gmail.com
                </a>
                <p>Send me an email</p>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Stack>
    </>
  );
}
