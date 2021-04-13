import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = () => {
    console.log(room);
  };
  return (
    <Card className='my-3 p-3 rounded customHover'>
      <Card.Body>
        <Card.Title as='div'>
          <strong>{room.name}</strong>
        </Card.Title>
        <Card.Text as='div'></Card.Text>
        <Card.Text as='h3'>
          {room.rating} out of {room.numReviews}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
