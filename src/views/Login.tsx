import { ChangeEvent, FormEvent, useContext, useState } from "react"
import TopSection from "../components/TopSection"
import { AuthContext } from "../context/AuthContext";
import { Button, Container, Form } from "react-bootstrap";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginEmail, loginGoogle, loginGithub} = useContext(AuthContext);


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

  const googleButtonStyle = {
    border : "1px solid gray",
    padding: '5px',
  }

  const otherLoggingOptions = {
    margin: '15px',
  }

  return (
    <>
      <TopSection/>
      <Container>
        <Form onSubmit={handleLogin}>
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
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>

        <div id="otherLoggingOptions" style={otherLoggingOptions}>
          <Button variant="light" onClick={loginGoogle} style={googleButtonStyle}>
            <img src="public\googleIcon.svg" /> Log in with Google
          </Button>
          <Button variant="dark" onClick={loginGithub}>
            <img src="public/github.png" width={"45px"}/>Login in with Github</Button>
        </div>

    
      </Container>
    </>
  )
}

export default Login