import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from "vuex-module-decorators";

import store from "@/store";
import { Map } from "@/types/application";
import { applicationApi } from "@/api";

@Module({ dynamic: true, store, name: "authentication", namespaced: true })
export default class ApplicationStore extends VuexModule {
  mapList!: Map[];

  get maps(): Map[] {
    return this.mapList;
  }

  @Mutation
  setMapList(maps: Map[] ): void {
    this.mapList = maps;
  }

  @Action
  async init(): Promise<void> {
    return this.loadApp();
  }

  @Action
  async loadApp(): Promise<void> {
    await applicationApi.fetchMaps().then((maps: Map[]) => this.setMapList(maps));
    return;
  }
}

export const application = getModule(ApplicationStore, store);
