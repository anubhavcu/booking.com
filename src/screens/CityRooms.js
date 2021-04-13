import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
      {/* <h1>{match.params.id} </h1> */}
      {rooms.map((room) => (
        // <h1>{room.name}</h1>
        // <h1>Hello</h1>
        <RoomCard room={room} />
      ))}
    </Container>
  );
};

export default CityRooms;
