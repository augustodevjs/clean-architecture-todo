import { setupTodoApiConfig } from "@nx-todo/shared/environment";
import { LoginFormModel, ResponseLoginModel } from "@nx-todo/shared/domain-types";
import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";

type Input = {
  data: LoginFormModel
};

export const login = async ({ data }: Input): Promise<ResponseLoginModel> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: "/Auth/login",
    method: "POST",
    body: data,
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body as ResponseLoginModel;
    case HttpStatusCode.BadRequest:
      throw new ValidationError(response.body.erros);
    default:
      throw new UnexpectedError();
  }
};
