import { ApiService } from './api.service';

class PostService extends ApiService {
  getAllPosts() {
    return this.get('posts');
  }

  getPostByID(postID) {
    return this.get(`posts/${postID}`);
  }
}

export const postService = new PostService();
