/* eslint-disable class-methods-use-this */
import axios from 'axios';
// import { cookieService } from '../cookie.service';
// import { storageService } from '../storage.service';

const baseURL = process.env.REACT_APP_API_HOST;

export const API = axios.create({
  baseURL,
  withCredentials: false, // should be `true` when auth need
  timeout: 60000,
});

export class ApiService {
  get(path, params) {
    return API.get(path, { params }).then((value) => value.data);
  }

  getList(path, params) {
    return API.get(path, { params }).then((value) => value.data.data);
  }

  delete(path, params) {
    return API.delete(path, { params }).then((value) => value.data);
  }

  head(path, params) {
    return API.head(path, { params }).then((value) => value.data);
  }

  post(path, data) {
    return API.post(path, data).then((value) => value.data);
  }

  put(path, data) {
    return API.put(path, data).then((value) => value.data);
  }

  patch(path, data) {
    return API.patch(path, data).then((value) => value.data);
  }

  downloadFile(fullPath, params) {
    return API.get(fullPath, {
      params,
      responseType: 'blob',
    }).then((res) => new Blob([res.data]));
  }
}
