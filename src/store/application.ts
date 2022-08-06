import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from "vuex-module-decorators";

import store from "@/store";
import { Map, Animal } from "@/types/application";
import { applicationApi } from "@/api";

@Module({ dynamic: true, store, name: "authentication", namespaced: true })
export default class ApplicationStore extends VuexModule {
  mapList!: Map[];
  animalList!: Animal[];

  get maps(): Map[] {
    return this.mapList;
  }

  get animals(): Animal[] {
    return this.animalList;
  }

  @Mutation
  setMapList(maps: Map[]): void {
    this.mapList = maps;
  }

  @Mutation
  setMapData(data: Animal[]): void {
    this.animalList = data;
  }

  @Action
  async init(): Promise<void> {
    return this.loadApp();
  }

  @Action
  async loadApp(): Promise<void> {
    await applicationApi
      .fetchMaps()
      .then((maps: Map[]) => this.setMapList(maps));
    return;
  }

  @Action
  async loadMapData(mapId: number): Promise<void> {
    await applicationApi
      .fetchMapData(mapId)
      .then((data: Animal[]) => this.setMapData(data));
    return;
  }
}

export const application = getModule(ApplicationStore, store);
