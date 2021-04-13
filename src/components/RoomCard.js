import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../mockImage.jpg';
import Rating from './Rating';
const RoomCard = ({ room }) => {
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = () => {
    // console.log(room);
  };

  return (
    <Card className='my-3 p-3 rounded customHover'>
      <Link to={`/room/${room.city}/${room.id}`}>
        <Card.Img src={image} variant='top' className='image' />
      </Link>
      <Card.Body>
        <Link to={`/room/${room.city}/${room.id}`}>
          <Card.Title as='div'>
            <strong>{room.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={room.rating} text={`${room.numReviews} reviews`} />
        </Card.Text>
        <Card.Text as='h5'>
          <ul>
            {room.facilities.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
