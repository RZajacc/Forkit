import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { Col, Container, Row } from "react-bootstrap";


function Dashboard() {

  const { user } = useContext(AuthContext);
 
  const containerStyle = {
    border: "1px solid black",
  }

  const profilePic = {
    width: "175px",
    borderRadius: "50%",

  }

  const noUserPic = {
    width: "175px",
    borderRadius: "50%",
  }

  return (
    <Container style={containerStyle}>
      <Row className="justify-content-md-center">
         <Col style={containerStyle} xs lg="4">
          <Row className="text-center">
            <p>Account details</p>
          </Row>
          <Row className="text-center">
            <p>Saved recipes</p>
          </Row>
        </Col>
        
        <Col style={containerStyle} xs lg="4">
          <Row className="justify-content-md-center text-center">
            {user?.photoURL ? 
              <img src={user?.photoURL} style={profilePic} /> 
              :
              <img src="../public/noUser.png" style={noUserPic} />
          }
          </Row>
          <p><strong>User name: </strong> {user!.displayName ? user!.displayName : "No user name assigned"}</p>
          <p><strong>Email: </strong> {user!.email || user?.providerData[0].email}</p>
          <p><strong>Active since: </strong> {user ? user.metadata.creationTime : "No data" }</p>
          <p><strong>Last login: </strong> {user ? user.metadata.lastSignInTime : "No data" }</p>
       </Col>
      </Row>
    </Container>

  )
}

export default Dashboard