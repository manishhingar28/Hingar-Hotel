import React, { useContext } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const location = useLocation();
  const { user ,role} = useContext(UserContext);

  const pathIs = (path) => location.pathname === path;

  const pathStartsWith = (text) => RegExp("^" + text, 'i').test(location.pathname);
   const handlelogout=()=>{
    localStorage.removeItem('token');
    window.location.reload();
   }
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className="fixed-top mb-5 shadow">
      <Container>
        <Navbar.Brand>
          <NavLink to='/'>
            {/* <img src={logo} alt="SharpSkill logo" /> */}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-center justify-content-lg-end">
          <Nav className="align-items-center">
            <Nav.Link as={NavLink} to="/" isactive={pathIs('/').toString()}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" isactive={pathStartsWith('/about').toString()}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/accomodation" isactive={pathStartsWith('/accomodation').toString()}>Accomodation</Nav.Link>
            <Nav.Link as={NavLink} to="/explore" isactive={pathStartsWith('/explore').toString()}>Explore</Nav.Link>
            <Nav.Link as={NavLink} to="/services" isactive={pathStartsWith('/services').toString()}>Services</Nav.Link>
            <Nav.Link as={NavLink} to="/reviews" isactive={pathStartsWith('/reviews').toString()}>Reviews</Nav.Link>
            {role==='admin'&& 
              <Nav.Link as={NavLink} to="/admin" isactive={pathStartsWith('/admin').toString()}>Admin</Nav.Link>
            }
            <div className="my-3 my-lg-0">
              {user ? (
                <Dropdown align="end" className="d-inline">
                  <Dropdown.Toggle variant="light" className="d-flex align-items-center border-0">
                    <span className="mx-1 fs-4">Hi, {user?.userName?.split(" ")[0]}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <NavLink to="/signup" className="btn btn-primary mx-1">Sign Up</NavLink>
                  <NavLink to="/signin" className="btn btn-outline-dark mx-1">Sign In</NavLink>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
