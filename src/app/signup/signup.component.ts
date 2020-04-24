import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  errorMessage: string;

  constructor(private authService: AuthService, private postService: PostService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value['email'];
    const password = form.value['password'];
    this.authService.createNewUser(email, password).then(
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
