import React from "react";
import { Carousel, Image } from "react-bootstrap";

export default function Gallery() {
  const photos = [
    "https://i.ibb.co/8Y9yVwq/f.jpg",
    "https://i.ibb.co/7VVYdmT/b.jpg",
    "https://i.ibb.co/fSPrjqx/c.jpg",
    "https://i.ibb.co/qp7N6CZ/d.jpg",
    "https://i.ibb.co/RNHPjh7/e.jpg",
    "https://i.ibb.co/8Y9yVwq/f.jpg",
    "https://i.ibb.co/8x07XRC/g.jpg",
    "https://i.ibb.co/Hn0zx5H/h.jpg",
    "https://i.ibb.co/4pps6DC/i.jpg",
    "https://i.ibb.co/L01NSXy/j.jpg",
    "https://i.ibb.co/NrBtctK/k.jpg",
    "https://i.ibb.co/8XBc8fB/l.jpg",
    "https://i.ibb.co/NC3CG8n/m.jpg",
  ];

  return (
    <div className="bg-cream">
      <h2 className="text-center divider bg-cream">Gallery</h2>
      <Carousel className="mx-auto caro bg-cream">
        {photos.map((photo) => {
          return (
            <Carousel.Item key={photo} className="text-center bg-cream">
              {" "}
              <Image style={{ width: "95%" }} rounded={true} src={photo} />{" "}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
