import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RoomCard from '../components/RoomCard';
import loading from '../loader.gif';

const CityRooms = ({ match }) => {
  const [city, setCity] = useState('');
  const [rooms, setRooms] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, [match]);
  const fetchRooms = async () => {
    setCity(match.params.id);
    const cityName = match.params.id.toLowerCase();
    const res = await fetch(`http://localhost:5000/${cityName}`);
    const data = await res.json();
    setRooms(data);
    setLoading(false);
  };
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/selectcity'>
        Go Back
      </Link>
      {isLoading === true && (
        <div>
          <h1>Loading...</h1>
          <img src={loading} alt='loading'></img>
        </div>
      )}
      <Row>
        {rooms.map((room) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <RoomCard room={room} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CityRooms;
