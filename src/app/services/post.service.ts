import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  postsSubject = new Subject<string[]>();

  private posts = [];
 
  constructor(private httpClient: HttpClient) { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }
 
  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }
    
  addLoveIts(i: number) {
    this.posts[i].loveIts += 1;
    this.emitPosts();
  }

  rmvLoveIts(i: number) {
    this.posts[i].loveIts -= 1;
    this.emitPosts();
  }

  removePost(i: number) {
    this.posts.splice(i, 1);
    this.emitPosts();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://angular-285c9.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    }
    
    getPostsFromServer() {
      this.httpClient
        .get<any[]>('https://angular-285c9.firebaseio.com/posts.json')
        .subscribe(
          (response) => {
            this.posts = response;
            this.emitPosts();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }

}
