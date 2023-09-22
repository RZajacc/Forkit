import { ChangeEvent, FormEvent, useContext, useState } from "react"
import TopSection from "../components/TopSection"
import { AuthContext } from "../context/AuthContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Account() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginEmail, loginGoogle, loginGithub, loginFacebook, register} = useContext(AuthContext);


  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginEmail(email, password);
  }


   const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(email, password);
  }

  const googleButtonStyle = {
    border : "1px solid gray",
    padding: '5px',
  }

  const otherLoggingOptions = {
    margin: '15px',
  }

  const colStyle = {
    border: "2px solid gray",
    borderRadius: "5%",
    padding: "30px",
    margin: "20px"
  }

  const loginButtonStyle = {
    width: "100%",
    margin: "5px",
    border: "1px solid black",
  }

  return (
    <>
      <TopSection/>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4" style={colStyle}>
            <Form onSubmit={handleLogin} className="text-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" style={loginButtonStyle}>
              Login
            </Button>
            </Form>
            
            <p className="text-center">Or select one of alternative logging options:</p>
            <Button variant="light" onClick={loginGoogle} style={loginButtonStyle}>
              <img src="public\googleIcon.svg" /> Log in with Google
            </Button>
                     
            <Button variant="light" onClick={loginGithub} style={loginButtonStyle}>
              <img src="public/github.png" width={"45px"} />Login in with Github
            </Button>
          
        
            <Button variant="light" onClick={loginFacebook} style={loginButtonStyle} >
              <img src="public/facebook.png" width={"45px"} />Login in with Facebook
            </Button>
              
            
          </Col>

          <Col  xs lg="4" style={colStyle}>
            <Form onSubmit={handleRegister} className="text-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
          </Form.Group>
          <Button variant="primary" type="submit" style={loginButtonStyle}>
            Register
          </Button>
        </Form>
          </Col>
        </Row>
        

    
      </Container>
    </>
  )
}

export default Account