import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>home</div>
    <a routerLink="lazy">Lazy</a>
  `
})
export class HomeComponent {
  title = 'home';
}
