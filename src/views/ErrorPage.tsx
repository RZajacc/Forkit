import { Col, Container, Row } from "react-bootstrap"
import "../style/ErrorPage.css"
import TopSection from "../components/TopSection"

function ErrorPage() {
    return (
        <>
            <TopSection/>
            <Container >
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <h3 className="text-center">The page you're trying to access doesnt exist!</h3>
                        <img src="nothing.jpg" id="nothing-to-see"/>
                    </Col>
                </Row>
            </Container>
      </>
  )
}

export default ErrorPage