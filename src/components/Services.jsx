import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Services() {
  return (
    <div className="bg-cream">
      <Container fluid="sm" className="bg-cream ">
        <h2 className="text-center text-fonted text-light fs-1">Services</h2>
        <Row>
          <Col sm={12} lg={4} className="text-center">
            <Card className="rounded-2 ">
              <Card.Header className="text-fonted text-center">
                Lorem
              </Card.Header>
              <Card.Img
                className="text-center"
                src="https://picsum.photos/1000/500"
              />
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam odio placeat qui in, officia quod repudiandae, odit,
                voluptate et repellat nesciunt! Magnam, odio. Ratione, hic.
                Velit labore odit nihil molestias.
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="text-center">
            <Card className="rounded-2 ">
              <Card.Header className="text-fonted text-center">
                Lorem
              </Card.Header>
              <Card.Img
                className="text-center"
                src="https://picsum.photos/1000/500"
              />
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam odio placeat qui in, officia quod repudiandae, odit,
                voluptate et repellat nesciunt! Magnam, odio. Ratione, hic.
                Velit labore odit nihil molestias.
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4} className="text-center">
            <Card className="rounded-2 ">
              <Card.Header className="text-fonted text-center">
                Lorem
              </Card.Header>
              <Card.Img
                className="text-center"
                src="https://picsum.photos/1000/500"
              />
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam odio placeat qui in, officia quod repudiandae, odit,
                voluptate et repellat nesciunt! Magnam, odio. Ratione, hic.
                Velit labore odit nihil molestias.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
