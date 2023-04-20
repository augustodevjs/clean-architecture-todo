import { HttpClient, HttpStatusCode, UnexpectedError } from "@nx-todo/shared/core";
import { ListsFormModel } from "@nx-todo/shared/domain-types";
import { setupTodoApiConfig } from "@nx-todo/shared/environment";

type Input = {
  id: string
}

export const loadById = async ({ id }: Input): Promise<ListsFormModel> => {
  const response = await HttpClient.AxiosHttpClient.of(
    setupTodoApiConfig()
  ).request({
    url: `/AssignmentList/${id}`,
    method: "GET",
  });

  switch (response.statusCode) {
    case HttpStatusCode.Ok:
      return response.body as ListsFormModel;
    default:
      throw new UnexpectedError();
  }
};
