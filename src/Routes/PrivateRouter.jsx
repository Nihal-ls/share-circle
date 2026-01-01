import { Navigate, useLocation } from 'react-router'
import useAuth from '../Hooks/useAuth'
import LoaidngSpinner from '../Components/Root/LoaidngSpinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoaidngSpinner/>
  if (user) return children
  return <Navigate to='/signup' state={location.pathname} replace='true' />
}

export default PrivateRoute
