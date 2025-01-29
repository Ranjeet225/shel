import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col } from "react-bootstrap";

const FilterBar = () => {
  return (
    <Container className="mt-4">
      <Row className="">
        <Col xs="auto">
          <Button variant="light" className="border">
            <i className="bi bi-filter"></i> Filter
          </Button>
        </Col>
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border">
              <i className="bi bi-sort-down"></i> Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Price: Low to High</Dropdown.Item>
              <Dropdown.Item>Price: High to Low</Dropdown.Item>
              <Dropdown.Item>Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs="auto">
          <Button variant="light" className="border">
            ⭐ 4+ Ratings
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="light" className="border">
            Offer
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterBar;
