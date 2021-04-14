import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
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
    // const [requests] = bookings.bookingsReq;
    const requests = bookings.map((item) => {
      return item.bookingsReq > 0;
    });
    console.log(bookings);
    // console.log(requests);

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
        {requests.map((req) => (
          <Col key={req.name} sm={12} md={6} lg={4} xl={3}>
            <Card className='my-3 p-3 rounded '>
              <Card.Body>
                <Card.Title as='div'>
                  <strong>{req.name}</strong>
                </Card.Title>
                <Card.Text as='div'></Card.Text>
                <Card.Text as='h5'>
                  <h5>{req.contact}</h5>
                  <h5> Paid: {req.Paid === true ? 'yes' : 'No'}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookingRequests;
