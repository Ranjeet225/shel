
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SalonCard from "../component/SaloonCard";

const recommnded = [
    {
      name: "LuxeLocks Salon & Spa",
      image: "/public/recm4.png",
      category: "Unisex",
      address: "6391 Elgin St, Delaware 10299",
      distance: "6.5 km",
      rating: "4.25",
      hours: "9:00 am - 7:00 pm",
    },
    {
      name: "Serenity Strands Salon",
      image: "/public/recm1.png",
      category: "Male",
      address: "1901 Thornridge Cir, Shiloh, Hawaii",
      distance: "9 km",
      rating: "4.25",
      hours: "9:00 am - 7:00 pm",
    },
    {
      name: "VelvetVibe Salon Lounge",
      image: "/public/recm3.png",
      category: "Unisex",
      address: "6391 Elgin St, Colina, Delaware",
      distance: "12 km",
      rating: "4.25",
      hours: "9:00 am - 7:00 pm",
    },
    {
      name: "Lumina Lux",
      image: "/public/recm4.png",
      category: "Female",
      address: "2972 Westheimer Rd, Santa...",
      distance: "15 km",
      rating: "4.25",
      hours: "9:00 am - 7:00 pm",
    },
    
  ];

const Recommnded = () => {
  return (
    <Container className="mt-4">
      <h2 className="section-title">Recommended</h2>
      <Row>
        {recommnded.map((recommnded, index) => (
          <Col md={3} key={index} className="mb-4">
            <SalonCard {...recommnded} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Recommnded