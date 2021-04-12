import { Navbar, Nav, Container, Button } from 'react-bootstrap';
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Booking.com</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='#home'>
                <Button variant='primary' size='sm' className='customHover'>
                  Sign In
                </Button>{' '}
              </Nav.Link>
              <Nav.Link href='#link'>
                <Button variant='secondary' size='sm' className='customHover'>
                  Create account
                </Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
