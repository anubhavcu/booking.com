import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Booking.com</Col>
          <Nav className='ml-auto'>
            <Nav.Link
              href='https://www.linkedin.com/in/anubhav-srivastava-370667198/'
              target='blank'
            >
              Linkedin
            </Nav.Link>
            <Nav.Link href='https://twitter.com/anubhav_sr' target='blank'>
              Twitter
            </Nav.Link>
            <Nav.Link href='mailto:anubhavsr.js@gmail.com' target='blank'>
              Gmail
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
