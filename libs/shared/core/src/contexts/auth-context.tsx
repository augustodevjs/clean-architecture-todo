import { createContext, useState } from "react";
import { Cache } from "../adapters";
import { AuthContextProps, AuthProviderProps } from "../types";

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children, getCurrentAccount }: AuthProviderProps) => {
  const getAccessToken = () => {
    const accessToken = Cache.get({
      key: 'accessToken'
    })
    return accessToken
  }

  const [accessToken, setAccessToken] = useState<string>(getAccessToken())

  const saveAccessToken = (accessToken: string) => {
    Cache.set({
      key: 'accessToken',
      value: accessToken
    })
    setAccessToken(accessToken)
  }

  return (
    <AuthContext.Provider value={{ getCurrentAccount, saveAccessToken, accessToken }} >
      {children}
    </AuthContext.Provider>
  )
}