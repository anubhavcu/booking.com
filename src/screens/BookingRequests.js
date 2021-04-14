import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  ButtonGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loading from '../loader.gif';

const BookingRequests = () => {
  const [isLoading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    fetchBookingRequests();
  }, []);
  const fetchBookingRequests = async () => {
    const data = await fetch('http://localhost:5000/profiles');
    const res = await data.json();
    const properties = await res.properties;
    const bookings = properties.filter((item) => item.bookingRequest > 0);

    // console.log(bookings);
    // bookings.map((item) => {
    //   item.bookingsReq.map((i) => console.log(i));
    // });
    setLoading(false);
    setRequests(bookings);
  };

  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Home
      </Link>

      <h3>Booking Requests:</h3>
      {isLoading === true && (
        <div>
          <h1>Loading...</h1>
          <img src={loading} alt='loading'></img>
        </div>
      )}
      <Row>
        {requests.map((item) =>
          item.bookingsReq.map((req) => (
            <Col key={req.name} sm={12} md={6} lg={4} xl={3}>
              <Card className='my-3 p-3 rounded '>
                <Card.Body>
                  <Card.Title as='div'>
                    <h4>Name: {req.name}</h4>
                  </Card.Title>
                  <Card.Text as='div'></Card.Text>
                  <Card.Text as='h5'>
                    <h5>Contact: {req.contact}</h5>
                    <h5>
                      {' '}
                      Paid:{' '}
                      {req.Paid === true ? (
                        <i className='fas fa-check-circle'></i>
                      ) : (
                        <i className='fas fa-times'></i>
                      )}
                    </h5>
                    <h5>
                      {' '}
                      Verified:{' '}
                      {req.verified === true ? (
                        <i className='fas fa-check-circle'></i>
                      ) : (
                        <i className='fas fa-times'></i>
                      )}
                    </h5>
                    <ButtonGroup className='mr-2'>
                      <Button variant='primary' className='mr-2 customHover'>
                        Accept
                      </Button>{' '}
                      <Button variant='danger' className='customHover'>
                        Reject
                      </Button>{' '}
                    </ButtonGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default BookingRequests;
