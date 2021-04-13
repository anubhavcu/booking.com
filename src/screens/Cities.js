import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, CardDeck, Container } from 'react-bootstrap';
import CityCard from '../components/CityCard';
// import cities from '../data/cities';
import rooms from '../data/db.js';
const Cities = () => {
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    fetchCities();
  }, []);
  const fetchCities = () => {
    // * for filtering an array of objects based on multiple props
    // * https://stackoverflow.com/a/56757215

    const uniqueCityList = rooms.filter(
      (v, i, a) =>
        a.findIndex((t) => t.city === v.city && t.state === v.state) === i
    );
    // console.log(uniqueCityList);
    setCityList(uniqueCityList);
  };
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Go Back
      </Link>
      <Row>
        {cityList.map((city) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <CityCard city={city} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cities;
