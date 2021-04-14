import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <Container>
        <h1>Book your home away from home!</h1>
        <br></br>
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
