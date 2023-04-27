import { AuthProvider } from '@todo/shared/core';
import { Router } from '../routes';
import { GlobalStyle } from '@todo/shared/styles';
import { getCurrentAccount } from '../adapters';

export const App = () => {
  return (
    <AuthProvider getCurrentAccount={getCurrentAccount}>
      <Router />
      <GlobalStyle />
    </AuthProvider>
  );
};
