import { Api } from "@/api/axios";
import { Map, Animal, Weapon, Ammunition } from "@/types/application";
import { AxiosResponse } from "axios";

export interface GameDataResource {
  animals: Animal[];
  weapons: Weapon[];
  ammunition: Ammunition[];
}
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

  /**
   * Get data for selected map.
   * @returns {Promise<Animal[]>}
   */
  public fetchMapData(mapId: number): Promise<Animal[]> {
    return this.get<Animal[]>(this.endpointUrl + "/map/" + mapId).then(
      (response: AxiosResponse<Animal[]>) => {
        return response.data;
      },
    );
  }
}
