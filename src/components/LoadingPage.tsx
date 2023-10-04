import { Col, Container, Row } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';


const loadingContainer = {
  marginTop: "6%",
}

const spinnerStyle = {
  width: "125px",
  height: "125px",
}


function LoadingPage() {
  return (
    <Container style={loadingContainer}>
      <Row className='justify-content-md-center'>
        <Col xs lg="5">
          <h1>Loading... Please wait...</h1>
          <Row className='justify-content-md-center'>
            <Col xs lg="5">
              <Spinner animation="border" variant="success" style={spinnerStyle} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  )
}

export default LoadingPage