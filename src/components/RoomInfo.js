import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const RoomInfo = ({ match }) => {
  useEffect(() => {
    console.log(match.params.id);
  }, [match]);
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/selectcity'>
        Go Back
      </Link>
      <h1>Room info</h1>
    </Container>
  );
};

export default RoomInfo;
