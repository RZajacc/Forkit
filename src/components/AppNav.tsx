import { useContext } from "react"
import { Container, Navbar, Nav, NavDropdown, NavLink, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from "../context/AuthContext"


function AppNav() {

  const { user, login, logout } = useContext(AuthContext);

  

  return (
      <Navbar expand="lg" className="p-3">
      <Container fluid>
        <LinkContainer to={"/"}>
        <Navbar.Brand>
          <img src="../public/hungry.svg" width="40" height="40"
            className="d-inline-block align-top" alt="Forkit logo"/>Forkit
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to={"recipes"}>
              <NavLink>Recipes</NavLink>
            </LinkContainer>
            <LinkContainer to={"contact"}>
              <NavLink>Contact</NavLink>
            </LinkContainer>
  
            <NavDropdown title="Profile" id="basic-nav-dropdown" >
              <LinkContainer to={"login"}>
                <NavDropdown.Item>Login</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"register"}>
                <NavDropdown.Item>Register</NavDropdown.Item> 
              </LinkContainer> 
              {user ? (
                <Button variant="danger" onClick={logout}>Logout</Button> 
              ): (
                  <Button variant="info" onClick={login}>Login</Button>
               )
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav