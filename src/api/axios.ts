import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import store from "@/store/index";

const defaultConfig = {
  url: process.env.VUE_APP_SERVER_URL,
};

export class Api {
  private api: AxiosInstance;

  public constructor(config?: AxiosRequestConfig) {
    config = config ? config : defaultConfig;
    this.api = axios.create(config);
    this.api.defaults.baseURL = defaultConfig.url;
    this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
      ...param,
    }));

    // Check if request is authenticated.
    this.api.interceptors.response.use(undefined, function(err) {
      return new Promise(function() {
        // if (err.response.status === 401) {
        //   store.commit("logoutAuth");
        // }
        throw err;
      });
    });

    // Check if we are authenticated.
    this.api.interceptors.request.use(
      config => {
        config.headers["Accept"] = "application/json";
        config.headers["Authorization"] = "Bearer " + store.getters.authToken;
        return config;
      },
      error => Promise.reject(error),
    );
  }

  public getUri(config?: AxiosRequestConfig): string {
    return this.api.getUri(config);
  }

  public request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.request(config);
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.get(url, config);
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.delete(url, config);
  }

  public head<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.head(url, config);
  }

  public post<T, R = AxiosResponse<T>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.post(url, data, config);
  }

  public put<T, R = AxiosResponse<T>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.put(url, data, config);
  }

  public patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.api.patch(url, data, config);
  }
}
