import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CityRooms = ({ match }) => {
  //   useEffect(() => {
  //     console.log(match);
  //   });
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/selectcity'>
        Go Back
      </Link>
      <h1>{match.params.id} </h1>
    </Container>
  );
};

export default CityRooms;
