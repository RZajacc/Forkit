import { ChangeEvent, FormEvent, useContext, useState } from "react"
import TopSection from "../components/TopSection"
import { AuthContext } from "../context/AuthContext";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

function Account() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswrod, setConfirmPasswrod] = useState("")
  const [passwordErr, setPasswordErr] = useState("")
  const { loginEmail, loginGoogle, loginGithub, loginFacebook, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswrodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPasswrod(e.target.value);
  }

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/dashboard');
    loginEmail(email, password);
  }

  const handleLoginGoogle = () => {
    navigate('/dashboard');
    loginGoogle();
  }

  const handleGithubLogin = () => {
    loginGithub();
    navigate('/dashboard');
  }

  const handleFacebookLogin = () => {
    loginFacebook();
    navigate('/dashboard');
  }


  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPasswrod) {
      setPasswordErr("Provided passwords don't match!")
    //  console.log("Passwords dont match")
    } else {
      setPasswordErr("");
      register(email, password);
      navigate('/dashboard');
      console.log("Passwords are fine")
      return (
        <Navigate to={'/'} />
      )
    }
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

  const otherLoggingOptions = {
    marginTop: "15px",
  }

  const errorStyle = {
    color: "red",
  }

  return (
    <>
      <TopSection/>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4" style={colStyle}>
            <Form onSubmit={handleLogin} className="text-center">
              <h5>If you already have an account simply log in using preferred option:</h5>
              <Form.Group className="mb-3" controlId="login-email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="login-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
              </Form.Group>
              <Button variant="primary" type="submit" style={loginButtonStyle}>
                Login
              </Button>
            </Form>
            
            <div style={otherLoggingOptions}>
              <h5 className="text-center">Or select one of alternative logging options:</h5>
              <Button variant="light" onClick={handleLoginGoogle} style={loginButtonStyle}>
                <img src="public\googleIcon.svg" /> Log in with Google
              </Button>
                      
              <Button variant="light" onClick={handleGithubLogin} style={loginButtonStyle}>
                <img src="public/github.png" width={"45px"} />Login in with Github
              </Button>
            
          
              <Button variant="light" onClick={handleFacebookLogin} style={loginButtonStyle} >
                <img src="public/facebook.png" width={"45px"} />Login in with Facebook
              </Button>
            </div>
              
            
          </Col>

          <Col  xs lg="4" style={colStyle}>
            <Form onSubmit={handleRegister} className="text-center">
              <h5>If you don't have an account yet please use this register form:</h5>
              <Form.Group className="mb-3" controlId="register-email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} required/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                <Form.Label>Repeat password</Form.Label>
                <Form.Control type="password" placeholder="confirm password" onChange={handleConfirmPasswrodChange}/>
              </Form.Group>
              <div style={errorStyle}>{passwordErr}</div>
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