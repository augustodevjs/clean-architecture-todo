import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";
import { RegisterFormModel, ResponseRegisterModel } from "@nx-todo/shared/domain-types";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

type Input = {
  data: RegisterFormModel;
};

export const add = async ({ data }: Input): Promise<ResponseRegisterModel> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: "/Auth/register",
    method: "POST",
    body: data,
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body as ResponseRegisterModel;
    case HttpStatusCode.BadRequest:
      throw new ValidationError(response.body.erros);
    default:
      throw new UnexpectedError();
  }
};
