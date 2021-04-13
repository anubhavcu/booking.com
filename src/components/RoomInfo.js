import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const RoomInfo = ({ match }) => {
  const [room, setRoom] = useState({});
  useEffect(() => {
    // console.log(match.params);
    fetchRoomDetails();
  }, [match]);

  const fetchRoomDetails = async () => {
    const res = await fetch(
      `http://localhost:5000/${match.params.city}/${match.params.id}`
    );
    const data = await res.json();
    console.log(data);
    setRoom(data);
  };
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/selectcity'>
        Go Back
      </Link>
      <h1>{room.name}</h1>
    </Container>
  );
};

export default RoomInfo;
