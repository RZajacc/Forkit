import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/Dashboard.css";


function Dashboard() {

  const { user } = useContext(AuthContext);
 
  return (
    <Container className="dashboard-container">
      <Row className="justify-content-md-center dashboard-content">
        <Col className="dashboard-top-content" >
          <Button variant="info" className="dashboard-button">Account details</Button>
        </Col>
        <Col className="dashboard-top-content">
          <Button variant="info" className="dashboard-button">Saved recipes</Button>
        </Col>
      </Row>
      <Row className="justify-content-md-center dashboard-content">
          {user?.photoURL ? 
            <img src={user?.photoURL} className="dashboard-profile-pic" /> 
            :
            <img src="../public/noUser.png"className="dashboard-nouser-pic" />
          }
      </Row>
        
      <Row className="dashboard-bottom-content">
          <p><strong>User name: </strong> {user!.displayName ? user!.displayName : "No user name assigned"}</p>
          <p><strong>Email: </strong> {(user!.email || user?.providerData[0].email) || "Data not available"}</p>
          <p><strong>Active since: </strong> {user ? user.metadata.creationTime : "No data" }</p>
          <p><strong>Last login: </strong> {user ? user.metadata.lastSignInTime : "No data" }</p>   
      </Row>
        
    </Container>
  )
}

export default Dashboard