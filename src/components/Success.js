import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loading from '../loader.gif';

const Success = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, []);
  return (
    <Container>
      <h1>Success ! Redirecting to home in a moment...</h1>
      <img src={loading} alt='loading'></img>
    </Container>
  );
};

export default Success;