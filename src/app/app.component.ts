import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor() {
    const config = {
      apiKey: "AIzaSyA2mzla6gN7z20dR2CoMX4NKsly3uaUo2o",
      authDomain: "angular-285c9.firebaseapp.com",
      databaseURL: "https://angular-285c9.firebaseio.com",
      projectId: "angular-285c9",
      storageBucket: "angular-285c9.appspot.com",
      messagingSenderId: "64314563779",
      appId: "1:64314563779:web:e7994052d5cdd4084a5676"
    };
    firebase.initializeApp(config);
  }
  
}
