import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

type Input = {
  id: string
};

export const remove = async ({ id }: Input) => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: `/AssignmentList/${id}`,
    method: "DELETE",
  });

  switch (response.statusCode) {
    case HttpStatusCode.NoContent:
      return;
    case HttpStatusCode.BadRequest:
      throw new ValidationError(response.body.erros);
    default:
      throw new UnexpectedError();
  }
};
