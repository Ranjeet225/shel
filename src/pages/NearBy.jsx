import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SalonCard from "../component/SaloonCard";


const salons = [
  {
    name: "LuxeLocks Salon & Spa",
    image: "/public/sal2.png",
    category: "Unisex",
    address: "6391 Elgin St, Delaware 10299",
    distance: "6.5 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
  {
    name: "Serenity Strands Salon",
    image: "/public/sal1.png",
    category: "Male",
    address: "1901 Thornridge Cir, Shiloh, Hawaii",
    distance: "9 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
  {
    name: "VelvetVibe Salon Lounge",
    image: "/public/sal2.png",
    category: "Unisex",
    address: "6391 Elgin St, Colina, Delaware",
    distance: "12 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
  {
    name: "Lumina Lux",
    image: "/public/sal1.png",
    category: "Female",
    address: "2972 Westheimer Rd, Santa...",
    distance: "15 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
  {
    name: "LuxeLocks Salon & Spa",
    image: "/public/sal2.png",
    category: "Unisex",
    address: "6391 Elgin St, Delaware 10299",
    distance: "6.5 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
  {
    name: "VelvetVibe Salon Lounge",
    image: "/public/sal1.png",
    category: "Unisex",
    address: "6391 Elgin St, Colina, Delaware",
    distance: "12 km",
    rating: "4.25",
    hours: "9:00 am - 7:00 pm",
  },
];

const NearBy = () => {
  return (
    <Container className="mt-4">
      <h2 className="section-title">Near by your area</h2>
      <Row>
        {salons.map((salon, index) => (
          <Col md={4} key={index} className="mb-4">
            <SalonCard {...salon} />
          </Col>
        ))}
      </Row>


      <div className="text-center mt-4">
      <div>Continue exploring salons</div>
        <a href="#" className="btn btn-primary mt-2">
          View All Nearby Salons
        </a>
      </div>

      
    </Container>
  );
};

export default NearBy;
