import { Container, Row, Col, Navbar, Nav, Offcanvas } from "react-bootstrap"
import '../style/AppNav.css'


function AppNav() {
  return (
     <Container fluid="xs" id='nav-container'>
      <Row className="justify-content-md-center">
        <Col xs={8}>
          <Navbar expand='xs'>
            <Container fluid>
              <Navbar.Brand href="#">
                <img
                  src="public/hungry.svg"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /> Fork it
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xs`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-xs`}
                aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
                    Page Navigation
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Recipes</Nav.Link>
                    <Nav.Link href="#action2">Login</Nav.Link>
                    <Nav.Link href="#action2">Register</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  )
}

export default AppNav