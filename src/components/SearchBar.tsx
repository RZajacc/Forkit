import { Container, Row, Col } from "react-bootstrap"
import "../style/SearchBar.css"

function SearchBar() {
  return (
    <Container fluid id="search-container">
      <Row className="justify-content-md-center">
        <Col xs={8}>Hello</Col>
      </Row>
    </Container>
  )
}

export default SearchBar