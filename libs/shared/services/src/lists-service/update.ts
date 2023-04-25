import { setupTodoApiConfig } from "@todo/shared/environment";
import { ListsFormModel, ListsModel } from "@todo/shared/domain-types";
import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@todo/shared/core";

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
