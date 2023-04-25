export type RegisterFormModel = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirm: string | undefined;
};

export type ResponseRegisterModel = {
  accessToken: string;
  expiresIn: number;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
