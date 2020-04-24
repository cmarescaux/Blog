import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs/Subscription';
import * as firebase from 'firebase';

@Injectable()
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: any[];

  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  onSavePost() {
    if(this.posts?.length === 0) {
      if(confirm('Etes-vous sûr de vouloir supprimer tous les posts sur le serveur ?')) {
        this.postService.savePostsToServer();
      } else {
        return null;
      }
    }
    else {
      this.postService.savePostsToServer();
    }
  }

  onGetPost() {
    this.postService.getPostsFromServer();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
