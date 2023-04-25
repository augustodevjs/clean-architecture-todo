import { ComponentType } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ContaUsuario, useAuth } from '@todo/shared/core'

type Props = {
  component: ComponentType
}

export const ProtectedRoute: React.FC<Props> = ({ component: RouteComponent }) => {
  const location = useLocation()
  const { getCurrentAccount } = useAuth()

  const currentAccount = getCurrentAccount<ContaUsuario>()

  if (currentAccount === undefined) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <RouteComponent />
}