//* we will fetch profile based on login from database, for now it is just dummy data
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
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
    console.log(res);
  };
  return (
    <Container>
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
            <Card className='my-3 p-3 rounded customHover'>
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
                  booking request :{' '}
                  {room.bookingRequest ? <Button>View request</Button> : 'No'}
                </h5>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Profile;
