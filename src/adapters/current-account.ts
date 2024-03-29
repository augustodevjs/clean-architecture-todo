import { Cache, Cryptography } from '@todo/shared/core';
import { ContaUsuario } from '@todo/shared/domain-types';

export const getCurrentAccount = <T>(): T | undefined => {
  const accessToken = Cache.get({ key: 'accessToken' });

  if (accessToken) {
    const decodeToken = Cryptography.decodeToken<T>(accessToken);
    const contaUsuario = decodeToken as unknown as ContaUsuario;

    const dateNow = new Date();
    const expirationToken = contaUsuario.exp * 1000;

    if (expirationToken < dateNow.getTime()) {
      Cache.remove({ key: 'accessToken' });
      return;
    }

    return decodeToken;
  }
};
