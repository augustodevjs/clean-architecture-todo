import { ContaUsuario } from "@nx-todo/shared/domain-types"
import { Cache, Cryptography } from ".."

export const getCurrentAccount = <T>(): T | undefined => {
  const accessToken = Cache.get({ key: 'accessToken' })

  if (accessToken) {
    const decodeToken = Cryptography.decodeToken<T>(accessToken)
    const contaUsuario = decodeToken as unknown as ContaUsuario

    const dateNow = new Date()
    const expirationToken = contaUsuario.exp * 1000

    if (expirationToken < dateNow.getTime()) {
      Cache.remove({ key: 'accessToken' })
      return
    }

    return decodeToken
  }
}
