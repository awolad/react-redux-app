/* eslint-disable class-methods-use-this */
import axios from 'axios';
// import { cookieService } from '../cookie.service';
// import { storageService } from '../storage.service';

const baseURL = process.env.REACT_APP_API_HOST;

let apiErrorHandler;

export const API = axios.create({
  baseURL,
  withCredentials: false, // should be `true` when auth need
  timeout: 60000,
});

export function setApiErrorHandler(handler) {
  apiErrorHandler = handler;
}

// API.interceptors.response.use(undefined, (err) => {
//   if (apiErrorHandler) {
//     apiErrorHandler(err);
//   }

//   if (err.response) {
//     return Promise.reject(err.response.data);
//   }

//   return Promise.reject(err);
// });

export class ApiService {
  // async get(path, params) {
  //   const value = await API.get(path, { params });
  //   return value.data;
  // }

  get(path, params) {
    return API.get(path, { params }).then((value) => value.data);
  }

  async getList(path, params) {
    const value = await API.get(path, { params });
    return value.data.data;
  }

  async delete(path, params) {
    const value = await API.delete(path, { params });
    return value.data;
  }

  async head(path, params) {
    const value = await API.head(path, { params });
    return value.data;
  }

  async post(path, data) {
    const value = await API.post(path, data);
    return value.data;
  }

  async put(path, data) {
    const value = await API.put(path, data);
    return value.data;
  }

  async patch(path, data) {
    const value = await API.patch(path, data);
    return value.data;
  }

  async downloadFile(fullPath, params) {
    const res = await API.get(fullPath, {
      params,
      responseType: 'blob',
    });
    return new Blob([res.data]);
  }
}
