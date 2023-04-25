import { Environment } from "../types";

type ApisEnvironment = {
  todo: {
    baseUrl: string | undefined;
  };
};

export const env: Environment<ApisEnvironment> = {
  app: {
    name: "TODO",
    homepageUrl: "/",
  },
  apis: {
    todo: {
      baseUrl: import.meta.env.VITE_API_TODO,
    },
  },
};
