import { useContext, ReactNode } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children : ReactNode,
}

function ProtectedRoute(props:ProtectedRouteProps) {

    const { user, loading } = useContext(AuthContext);
    

  return (
      <>
        {loading ? <h1>...Loading...</h1> : user ? props.children : <Navigate to="/account" />}
      </>
  )
}

export default ProtectedRoute