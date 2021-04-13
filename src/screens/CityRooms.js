import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import rooms from '../data/db.js';
import RoomCard from '../components/RoomCard';

const CityRooms = ({ match }) => {
  const [city, setCity] = useState('');
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
    console.log(match.params.id);
  }, [match]);
  const fetchRooms = async () => {
    setCity(match.params.id);
    const cityName = match.params.id.toLowerCase();
    const res = await fetch(`http://localhost:5000/${cityName}`);
    const data = await res.json();
    console.log(data);
    setRooms(data);
  };
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/selectcity'>
        Go Back
      </Link>
      <Row>
        {rooms.map((room) => (
          <Col>
            <RoomCard room={room} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CityRooms;
