import { ApiService } from './api.service';

class AuthorService extends ApiService {
  getAuthorByID(userID) {
    return this.get(`users/${userID}`);
  }
}

export const authorService = new AuthorService();
