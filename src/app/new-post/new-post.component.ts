import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})

export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postservice: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onAddPost() {
    const formValue = this.postForm.value;
    const newPost = new Post(
    formValue['title'],
    formValue['content']);
    newPost.loveIts = 0;
    newPost.created_at = new Date;
    this.postservice.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
