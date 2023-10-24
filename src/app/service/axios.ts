import axios, { type AxiosRequestConfig, type AxiosInstance } from 'axios';

// import path from 'app/routes/path';

// import { LocalStorageService } from '../';

declare module 'axios' {
  export interface AxiosRequestConfig {
    throwAccessDenied?: boolean; // is true if you want to self handle access denied exception
  }
}

export const createService = (
  baseURL?: string,
  contentType: string = 'application/json',
): AxiosInstance => {
  return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
  baseURL?: string,
  contentType: string = 'application/json',
): AxiosInstance => {
  const config: AxiosRequestConfig = baseConfig(baseURL, contentType);
  config.responseType = 'blob';
  return interceptAuth(config);
};

const baseConfig = (
  baseURL?: string,
  contentType: string = 'application/json',
) => {
  return {
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': contentType,
    },
  };
};

const interceptAuth = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);

  instance.interceptors.request.use((cf: any) => {
    // const language: any = LocalStorageService.get(LocalStorageService.LANGUAGE);
    // const token = LocalStorageService.get(LocalStorageService.OAUTH_TOKEN);
    // if (token && cf?.headers) {
    //   cf.headers['Authorization'] = 'Bearer ' + token;
    //   cf.headers['Accept-Language'] = language.acceptLanguage;
    // }
    return cf;
  });
  instance.interceptors.response.use(
    (response: any) => {
      // Do something with response data
      return response;
    },
    (error: any) => {
      if (error.response.status === 401) {
        // LocalStorageService.removeAllItem();
        // window.location.href = `${path.login}#${window.location.pathname}${window.location.search}`;
      }
      // Do something with response error
      return Promise.reject(error);
    },
  );
  return instance;
};

export const createServiceNoToken = (baseURL?: string): AxiosInstance => {
  const instance = interceptAuth({
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': 'application/json',
    },
  })
  return instance;
};

export const createServiceWithToken = (
  baseURL?: string,
  token?: string,
): AxiosInstance => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const instance = axios.create({
    baseURL,
    headers: {
      'Accept-Language': 'en-US',
      'Content-Type': 'application/json',
    },
  });
  instance.interceptors.request.use((config: any) => {
    return config;
  });
  return instance;
};
