import { useContext } from "react"
import { Container, Navbar, Nav, NavLink, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from "../context/AuthContext"


function AppNav() {

  const { user, logout } = useContext(AuthContext);



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

            {user ? (
              <>
               <LinkContainer to={"dashboard"}>
                 <NavLink>Dashboard</NavLink>
              </LinkContainer>
              <LinkContainer to={"account"}>
                <Button variant="danger" onClick={logout}><img src="../public/door-open-white.svg" alt="opened door" width="25px" /> Logout</Button>
              </LinkContainer>
              </>
              )
              : (
                <LinkContainer to={"account"}>
                  <NavLink><img src="../public/account-50-black.png" width="25px" /> Account</NavLink>
                 </LinkContainer> 
               
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav