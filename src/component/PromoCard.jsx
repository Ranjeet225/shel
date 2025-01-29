import React from "react";
import { Card, Button } from "react-bootstrap";

const PromoCard = ({ discount, description, code, expiry, color }) => {
  return (
    <Card className="promo-card" style={{ background: color }}>
      <Card.Body>
        <h5 className="discount-text">{discount}</h5>
        <p className="promo-description">{description}</p>
        <div className="promo-code">
          <span>Code:</span> <strong>{code}</strong>
        </div>
        <p className="promo-expiry">Expire on: {expiry}</p>
        <Button variant="light" className="know-more-btn">Know More</Button>
      </Card.Body>
    </Card>
  );
};

export default PromoCard;
