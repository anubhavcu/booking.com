import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../mockImage.jpg';
const RoomCard = ({ room }) => {
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = () => {
    console.log(room);
  };

  return (
    <Card className='my-3 p-3 rounded customHover'>
      <Link to={`/product/${room.id}`}>
        <Card.Img src={image} variant='top' className='image' />
      </Link>
      <Card.Body>
        <Link to={`/room/${room.id}`}>
          <Card.Title as='div'>
            <strong>{room.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          {room.rating} out of {room.numReviews}
        </Card.Text>
        <Card.Text as='h3'>
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
