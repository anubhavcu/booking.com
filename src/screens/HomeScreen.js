import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div>
      <Container>
        <h1>Book your home away from home!</h1>
        <Link to='/selectcity'>
          <Button variant='outline-success'>Book Home</Button>{' '}
        </Link>
        <Link to='/login'>
          <Button variant='outline-info'>List your property</Button>{' '}
        </Link>
      </Container>
    </div>
  );
};

export default HomeScreen;
