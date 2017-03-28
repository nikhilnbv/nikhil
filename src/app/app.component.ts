import { Component } from '@angular/core';
//import { Router } from '@angular/router';
//import { routing } from './services/app.router';

@Component({
   moduleId: module.id,
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
