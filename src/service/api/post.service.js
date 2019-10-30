import { ApiService } from './api.service';

class PostService extends ApiService {
  getAllPosts() {
    return this.get('posts');
  }

  getPostByID(postID) {
    return this.get(`posts/${postID}`);

    // return new Promise((resolve) => {
    //   setTimeout(() => resolve(this.get(`posts/${postID}`)), 5000);
    // });

    // return new Promise((resolve, reject) => {
    //   reject('error by Awolad');
    // });
  }
}

export const postService = new PostService();
