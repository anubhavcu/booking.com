import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import image from '../mockImage.jpg';
import loading from '../loader.gif';

const RoomInfo = ({ match }) => {
  const [room, setRoom] = useState({});
  const [facilities, setFacilities] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchRoomDetails();
  }, [match]);

  const fetchRoomDetails = async () => {
    const res = await fetch(
      `http://localhost:5000/${match.params.city}/${match.params.id}`
    );
    const data = await res.json();
    setLoading(false);
    setRoom(data);
    setFacilities(data.facilities);
  };
  return (
    <Container>
      <Link
        className='btn btn-dark my-3 customHover'
        to={`/selectcity/${room.city}`}
      >
        Go Back
      </Link>
      {isLoading === true && (
        <div>
          <h1>Loading...</h1>
          <img src={loading} alt='loading'></img>
        </div>
      )}
      <Row>
        <Col md={6}>
          <Image src={image} alt={room.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{room.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={room.rating} text={`${room.numReviews} reviews`} />
            </ListGroup.Item>
            {facilities.map((item) => (
              <ListGroup.Item>
                <i className='fas fa-arrow-circle-right'></i> {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Couple Friendly:</Col>
                  <Col>
                    <strong>
                      {room.coupleFriendly ? (
                        <i className='fas fa-check-circle'></i>
                      ) : (
                        <i className='fas fa-times'></i>
                      )}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Verified:</Col>
                  <Col>
                    {room.verified ? (
                      <i className='fas fa-check-circle'></i>
                    ) : (
                      <i className='fas fa-times'></i>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Link to='/payment'>
                  <Button
                    className='btn-block customHover'
                    type='button'
                    disabled={false}
                  >
                    Book it Now!
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomInfo;
