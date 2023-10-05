import { useContext } from "react"
import { Row } from "react-bootstrap"
import { AuthContext } from "../context/AuthContext"


function DashboardUser() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Row className="justify-content-md-center dashboard-content">
        {user?.photoURL ?
          <img src={user?.photoURL} className="dashboard-profile-pic" />
          :
          <img src="../public/noUser.png" className="dashboard-nouser-pic" />
        }
      </Row>

      <Row className="dashboard-bottom-content">
        <p><strong>User name: </strong> {user!.displayName ? user!.displayName : "No user name assigned"}</p>
        <p><strong>Email: </strong> {(user!.email || user?.providerData[0].email) || "Data not available"}</p>
        <p><strong>Active since: </strong> {user ? user.metadata.creationTime : "No data"}</p>
        <p><strong>Last login: </strong> {user ? user.metadata.lastSignInTime : "No data"}</p>
      </Row>
    </>
  )
}

export default DashboardUser