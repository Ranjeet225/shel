import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromoCard from "../component/PromoCard";

const promoData = [
  {
    discount: "Get 30% OFF",
    description: "Get discount on all the Skin care services",
    code: "SKIN30OFF",
    expiry: "20 Aug, 2022",
    color: "linear-gradient(135deg, #ff4e50, #f9d423)",
  },
  {
    discount: "Flat 50% OFF",
    description: "Get discount on all the Skin care services",
    code: "SKIN50OFF",
    expiry: "20 Aug, 2022",
    color: "linear-gradient(135deg, #4776E6, #8E54E9)",
  },
  {
    discount: "Flat Discount $49",
    description: "Get discount on all the Skin care services",
    code: "SKIN49OFF",
    expiry: "20 Aug, 2022",
    color: "linear-gradient(135deg, #f12711, #f5af19)",
  },
  {
    discount: "Get 80% OFF",
    description: "Get discount on all the Skin care services",
    code: "SKIN80OFF",
    expiry: "20 Aug, 2022",
    color: "linear-gradient(135deg, #11998e, #38ef7d)",
  },
];

const PromoSection = () => {
  return (
    <Container className="mt-4">
      <h2 className="section-title">Promo Codes For More Savings</h2>
      <Row>
        {promoData.map((promo, index) => (
          <Col md={3} key={index}>
            <PromoCard {...promo} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PromoSection;
