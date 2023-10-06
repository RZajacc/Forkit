import { useContext } from 'react';
import { Container, Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { AuthContext } from '../context/AuthContext';

function AppNav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar expand='lg' className='p-3'>
      <Container fluid>
        <LinkContainer to={'/'}>
          <Navbar.Brand>
            <img
              src='../public/hungry.svg'
              width='40'
              height='40'
              className='d-inline-block align-top'
              alt='Forkit logo'
            />
            Forkit
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <LinkContainer to={'recipes'}>
              <NavLink>Recipes</NavLink>
            </LinkContainer>
            <LinkContainer to={'contact'}>
              <NavLink>Contact</NavLink>
            </LinkContainer>

            {user ? (
              <>
                <LinkContainer to={'dashboard'}>
                  <NavLink>Dashboard</NavLink>
                </LinkContainer>
                <LinkContainer to={'account'}>
                  <Button variant='danger' onClick={logout}>
                    <img src='https://firebasestorage.googleapis.com/v0/b/forkit-d574f.appspot.com/o/door-open-white.svg?alt=media&token=02cc62e2-e221-46ba-acfe-9ce5e156a510' alt='opened door' width='25px' />{' '}
                    Logout
                  </Button>
                </LinkContainer>
              </>
            ) : (
              <LinkContainer to={'account'}>
                <NavLink>
                  <img src='https://firebasestorage.googleapis.com/v0/b/forkit-d574f.appspot.com/o/account-50-black.png?alt=media&token=07ba0644-e81a-4f25-8166-a4d0d6c7a799' width='25px' /> Account
                </NavLink>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
