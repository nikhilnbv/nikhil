import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { routing } from './services/app.router';
import './scripts/jquery-3.2.0.min.js';

@Component({
   moduleId: module.id,
  selector: 'app-root',
  template: `

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
