import { Router } from '../routes'
import { GlobalStyle } from "@todo/shared/styles"
import { AuthProvider, CurrentAccount } from "@todo/shared/core"

export const App = () => {
  return (
    <AuthProvider getCurrentAccount={CurrentAccount.getCurrentAccount}>
      <Router />
      <GlobalStyle />
    </AuthProvider>
  )
}