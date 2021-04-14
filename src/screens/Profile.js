//* we will fetch profile based on login from database, for now it is just dummy data
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import loading from '../loader.gif';
import image from '../mockImage.jpg';
import Rating from '../components/Rating';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [properties, setProperties] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const data = await fetch('http://localhost:5000/profiles');
    const res = await data.json();
    setProfile(res);
    setProperties(res.properties);
    setLoading(false);
  };
  return (
    <Container>
      <Link className='btn btn-dark my-3 customHover' to='/'>
        Home
      </Link>
      <h1>Welcome {profile.name}</h1>
      <h3>Your listings :</h3>
      {isLoading === true && (
        <div>
          <h1>Loading...</h1>
          <img src={loading} alt='loading'></img>
        </div>
      )}
      <Row>
        {properties.map((room) => (
          <Col key={room.name} sm={12} md={6} lg={4} xl={3}>
            <Card className='my-3 p-3 rounded '>
              <Card.Img src={image} variant='top' className='image' />
              <Card.Body>
                <Card.Title as='div'>
                  <strong>{room.name}</strong>
                </Card.Title>
                <Card.Text as='div'>
                  <Rating
                    value={room.rating}
                    text={`${room.numReviews} reviews`}
                  />
                </Card.Text>
                <Card.Text as='h5'>
                  <ul>
                    {room.facilities.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </Card.Text>
                <h5>
                  booking requests:{' '}
                  {room.bookingRequest ? (
                    <Badge pill variant='info'>
                      {room.bookingRequest}
                    </Badge>
                  ) : (
                    ''
                  )}
                  {room.bookingRequest ? (
                    <Link to='/profile/bookingrequests'>
                      <Button className='customHover'>View requests </Button>
                    </Link>
                  ) : (
                    'No'
                  )}
                </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card>
            <Card.Body>
              <Card.Text as='h5'>
                <Link
                  className='btn btn-dark my-3 customHover'
                  to='/profile/upload'
                >
                  Add more.{' '}
                  <i className='fa fa-plus-circle' aria-hidden='true'></i>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
