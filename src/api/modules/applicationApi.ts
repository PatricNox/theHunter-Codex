import { Api } from "@/api/axios";
import { User } from "@/types/application";
import { AxiosResponse } from "axios";
export default class ApplicationApi extends Api {
  endpointUrl: string;
  constructor(endpointUrl: string) {
    super();
    this.endpointUrl = endpointUrl;
  }

  /**
   * Get all users
   * @returns {Promise<User[]>}
   */
  public getUsers(): Promise<User[]> {
    return this.get<User[]>(this.endpointUrl + "/users").then(
      (response: AxiosResponse<User[]>) => {
        return response.data;
      },
    );
  }
}
