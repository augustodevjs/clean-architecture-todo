import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";
import { ListsFormModel, ListsModel } from "@nx-todo/shared/domain-types";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

type Input = {
  id: string
  data: ListsFormModel
};

export const update = async ({ data, id }: Input): Promise<ListsModel> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: `/AssignmentList/${id}`,
    method: "PUT",
    body: {
      name: data.name,
      id
    },
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
