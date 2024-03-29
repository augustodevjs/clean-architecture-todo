import { setupTodoApiConfig } from "@todo/shared/environment";
import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@todo/shared/core";

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
