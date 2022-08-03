import { Api } from "@/api/axios";
import { Map } from "@/types/application";
import { AxiosResponse } from "axios";
export default class ApplicationApi extends Api {
  endpointUrl: string;
  constructor(endpointUrl: string) {
    super();
    this.endpointUrl = endpointUrl;
  }

  /**
   * Get all Maps
   * @returns {Promise<Map[]>}
   */
  public fetchMaps(): Promise<Map[]> {
    return this.get<Map[]>(this.endpointUrl + "/maps").then(
      (response: AxiosResponse<Map[]>) => {
        return response.data;
      },
    );
  }
}
