import { ListsFormModel } from "@todo/shared/domain-types";
import { setupTodoApiConfig } from "@todo/shared/environment";
import { HttpClient, HttpStatusCode, UnexpectedError } from "@todo/shared/core";

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
