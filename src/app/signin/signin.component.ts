import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService, private postService: PostService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];
    this.authService.signInUser(email, password).then(
      () => {
        this.postService.getPostsFromServer();
        this.router.navigate(['/posts']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
