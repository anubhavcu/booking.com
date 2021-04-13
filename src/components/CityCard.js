import React, { useEffect } from 'react';

import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  // useEffect(() => {
  // }, []);

  return (
    <Container>
      <Card className='my-3  rounded customHover'>
        <Link to={`/selectcity/${city.name}`}>
          <Card.Body>
            <Card.Title as='h3'>
              <strong>{city.name}</strong>
            </Card.Title>
            <Card.Text as='div'>{city.state}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Container>
  );
};

export default CityCard;
