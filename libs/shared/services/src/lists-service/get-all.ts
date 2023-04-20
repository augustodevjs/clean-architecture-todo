import { HttpClient, HttpStatusCode, UnexpectedError, ValidationError } from "@nx-todo/shared/core";
import { ListsModel } from "@nx-todo/shared/domain-types";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

export const getAll = async (): Promise<ListsModel[]> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: "/AssignmentList?perPage=100",
    method: "GET",
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body.items as ListsModel[];
    case HttpStatusCode.Unauthorized:
      throw new ValidationError(response.body)
    default:
      throw new UnexpectedError();
  }
};
