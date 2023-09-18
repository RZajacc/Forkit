import { useContext } from "react"
import TopSection from "../components/TopSection"
import { AuthContext } from "../context/AuthContext";

function Login() {

  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <TopSection/>
      <div>Login</div>
    </>
  )
}

export default Login