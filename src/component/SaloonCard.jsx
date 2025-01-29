import React from "react";
import { Card, Badge } from "react-bootstrap";
import { BsStarFill, BsGeoAlt, BsClock } from "react-icons/bs";

const SalonCard = ({ name, image, category, address, distance, rating, hours }) => {
  return (
    <Card className="salon-card">
      <div className="card-image-container">
        <Card.Img variant="top" src={image} className="salon-image" />
        <Badge bg={category === "Unisex" ? "secondary" : category === "Male" ? "primary" : "danger"} className="category-badge">
          {category}
        </Badge>
      </div>
      <Card.Body>
        <Card.Title className="salon-name">{name}</Card.Title>
        <Card.Text className="salon-details">
          <BsGeoAlt /> {address} <span className="distance">{distance}</span>
        </Card.Text>
        <Card.Text className="salon-hours">
          <BsClock /> {hours}
        </Card.Text>
      </Card.Body>
      <div className="rating-badge">
        <BsStarFill /> {rating}
      </div>
    </Card>
  );
};

export default SalonCard;
