import { Col, Container, Row } from "react-bootstrap"
import { useRouteError } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"

import TopSection from "../components/TopSection"

import "../style/ErrorPage.css"

interface RouteErrorType {
    data: string,
    error: {
        message: string,
    }
    status: number,
    statusText: string,
}

function ErrorPage() {
    const error = useRouteError() as RouteErrorType;
    return (
        <>
            <TopSection />
            <Container >
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <h3 className="text-center">The page you're trying to access doesnt exist!</h3>
                        <p className="text-center">{error.error.message}</p>
                        <img src="nothing.jpg" id="nothing-to-see" />
                        <div className="text-center">
                            <LinkContainer to={"/"}>
                                <a className="btn btn-success" role="button" id="take-me-home-link">Take me to home!</a>
                            </LinkContainer>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ErrorPage