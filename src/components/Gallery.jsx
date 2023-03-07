import React from "react";
import { Carousel, Image } from "react-bootstrap";

export default function Gallery() {
  const photos = [
    "../../assets/gallery images/a.jpg",
    "../../assets/gallery images/b.jpg",
    "../../assets/gallery images/c.jpg",
    "../../assets/gallery images/d.jpg",
    "../../assets/gallery images/e.jpg",
    "../../assets/gallery images/f.jpg",
    "../../assets/gallery images/g.jpg",
    "../../assets/gallery images/h.jpg",
    "../../assets/gallery images/i.jpg",
    "../../assets/gallery images/j.jpg",
    "../../assets/gallery images/k.jpg",
    "../../assets/gallery images/l.jpg",
    "../../assets/gallery images/m.jpg",
    // '../../assets/gallery images/n.jpg',
    // '../../assets/gallery images/o.jpg',
    // '../../assets/gallery images/p.jpg',
    // '../../assets/gallery images/q.jpg',
    // '../../assets/gallery images/r.jpg',
    // '../../assets/gallery images/s.jpg',
    // '../../assets/gallery images/t.jpg',
    // '../../assets/gallery images/u.jpg',
    // '../../assets/gallery images/v.jpg',
    // '../../assets/gallery images/w.jpg',
    // '../../assets/gallery images/x.jpg',
    // '../../assets/gallery images/y.jpg',
    // '../../assets/gallery images/z.jpg',
    // '../../assets/gallery images/aa.jpg',
    // '../../assets/gallery images/ab.jpg',
    // '../../assets/gallery images/ac.jpg',
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
