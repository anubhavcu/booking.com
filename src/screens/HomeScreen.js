import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../background.jpg';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <h1>Book your home away from home!</h1>
        <Link to='/selectcity'>
          <Button variant='outline-success'>Book Home</Button>{' '}
        </Link>
        <Link to='/login'>
          <Button variant='outline-info'>List your property</Button>{' '}
        </Link>
      </Container>
    </>
  );
};

export default HomeScreen;
