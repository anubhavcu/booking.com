import { useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  useEffect(() => {
    console.log(window.location.href);
  });

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Booking.com</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link>
                <Link to='/login'>
                  <Button variant='primary' size='sm' className='customHover'>
                    Sign In
                  </Button>{' '}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/signup'>
                  <Button variant='secondary' size='sm' className='customHover'>
                    Create account
                  </Button>{' '}
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
