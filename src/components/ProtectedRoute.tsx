import { useContext, ReactNode } from 'react'
import { AuthContext } from '../context/AuthContext'

type ProtectedRouteProps = {
    children : ReactNode,
}

function ProtectedRoute(props:ProtectedRouteProps) {

    const { user } = useContext(AuthContext);
    

  return (
      <>
        {user ? props.children : <h2>Youre not allowed here</h2>}
      </>
  )
}

export default ProtectedRoute