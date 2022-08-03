import {
  Action,
  Module,
  Mutation,
  VuexModule,
  getModule,
} from "vuex-module-decorators";

import store from "@/store";
import { User } from "@/types/application";

@Module({ dynamic: true, store, name: "authentication", namespaced: true })
export default class AuthStore extends VuexModule {
  authenticatedUser: User | null = null;
  userToken: string | null = localStorage.getItem("userToken");

  @Mutation
  setUserToken(token: string | null): void {
    this.userToken = token;
    if (token) localStorage.setItem("userToken", token);
    else localStorage.removeItem("userToken");
  }

  @Action
  async signOut() {
    this.setUserToken(null);
    this.setAuthenticatedUser(null);
  }
}

export const authModule = getModule(AuthStore, store);
