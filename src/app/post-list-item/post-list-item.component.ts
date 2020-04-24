import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() index: number;

  constructor(private postService: PostService, private router: Router ) { }

  ngOnInit(): void {
  }
  
  onAddLoveIts() {
      this.postService.addLoveIts(this.index);
  }
  
  onRmvLoveIts() {
      this.postService.rmvLoveIts(this.index);
  }

  onDeletePost() {
    if(confirm('Etes-vous sûr de vouloir supprimer le post "' + this.postTitle + '"')) {
      this.postService.removePost(this.index);
    } else {
      return null;
    }
  }
}
