import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ 'background-color': 'lightgrey' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <h4>Copyright &copy; Booking.com</h4>{' '}
          </Col>
          <Nav className='ml-auto'>
            <Nav.Link
              href='https://www.linkedin.com/in/anubhav-srivastava-370667198/'
              target='blank'
            >
              <i className='fab fa-linkedin fa-3x customHover'></i>
            </Nav.Link>
            <Nav.Link href='https://twitter.com/anubhav_sr' target='blank'>
              <i className='fab fa-twitter fa-3x customHover'></i>
            </Nav.Link>
            <Nav.Link href='mailto:anubhavsr.js@gmail.com' target='blank'>
              <i className='fas fa-envelope fa-3x customHover'></i>
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
