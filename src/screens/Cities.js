import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, CardDeck, Container } from 'react-bootstrap';
import CityCard from '../components/CityCard';
import cities from '../data/cities';
const Cities = () => {
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Go Back
      </Link>
      <Row>
        {cities.map((city) => (
          <Col key={city._id} sm={12} md={6} lg={4} xl={3}>
            <CityCard city={city} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;
