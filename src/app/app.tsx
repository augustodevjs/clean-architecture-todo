import { Router } from '../routes'
import { GlobalStyle } from "@nx-todo/shared/styles"
import { AuthProvider, CurrentAccount } from "@nx-todo/shared/core"

export const App = () => {
  return (
    <AuthProvider getCurrentAccount={CurrentAccount.getCurrentAccount}>
      <Router />
      <GlobalStyle />
    </AuthProvider>
  )
}