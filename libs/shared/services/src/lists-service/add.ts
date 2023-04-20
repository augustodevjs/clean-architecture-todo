import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";
import { ListsFormModel, ListsModel } from "@nx-todo/shared/domain-types";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

type Input = {
  data: ListsFormModel
};

export const add = async ({ data }: Input): Promise<ListsModel> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: "/AssignmentList",
    method: "POST",
    body: data,
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body as ListsModel;
    case HttpStatusCode.BadRequest:
      throw new ValidationError(response.body.erros);
    default:
      throw new UnexpectedError();
  }
};
