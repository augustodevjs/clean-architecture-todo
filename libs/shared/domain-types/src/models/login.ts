export type LoginFormModel = {
  email: string;
  password: string;
}

export type ResponseLoginModel = {
  accessToken: string;
  expiresIn: number;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
