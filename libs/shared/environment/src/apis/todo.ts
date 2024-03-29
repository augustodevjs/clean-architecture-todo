import { Cache } from "@todo/shared/core";
import { ApiConfig } from "../types";
import { env } from "../configs"

type SetupApiConfig = (overrides?: ApiConfig) => ApiConfig;

export const setupTodoApiConfig: SetupApiConfig = () => {
  const accessToken = Cache.get({ key: 'accessToken' })

  return {
    baseUrl: env.apis.todo.baseUrl,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
}
