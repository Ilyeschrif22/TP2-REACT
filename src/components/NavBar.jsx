import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Event Management
        </Navbar.Brand>    

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/events" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
              Events
            </Nav.Link>

            <Nav.Link as={NavLink} to="/ajout" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            Add new Event
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;