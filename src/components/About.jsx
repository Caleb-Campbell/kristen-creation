import React from "react";
import { Container, Stack, Image, Row, Col } from "react-bootstrap";
import family from "../../assets/HatchFamily.jpg";

export default function About() {
  return (
    <div id="about" className="bg-cream">
      <Stack className="bg-cream p-2 about mx-auto">
        <h2 className="text-center text-muted ">About Me</h2>
        <h3 className="text-muted">
          I'm a bad boy. Always have been. But you knew that.
        </h3>
        <p className="text-muted">
          I had been searching for my family for months, ever since I had heard
          about the old oil fields near my hometown. I was desperate to find
          them, so I set out to investigate. After days of searching, I stumbled
          upon one of the oil fields. As I approached, I noticed my family's
          faces among the workers. I was overwhelmed with emotion and quickly
          negotiated a reasonable price to buy them out of their labor. With a
          heavy heart, I paid the price and my family was finally free. We all
          hugged and thanked each other, and to this day I'm grateful to have
          found them in the oil fields.
        </p>
        <Image className="w-100 mx-auto family" src={family} />
      </Stack>
    </div>
  );
}
