import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap"


function AppNav() {
  return (
      <Navbar expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="public/hungry.svg" width="40" height="40"
            className="d-inline-block align-top" alt="Forkit logo"/>Forkit
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Recipes</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Register
              </NavDropdown.Item>              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNav