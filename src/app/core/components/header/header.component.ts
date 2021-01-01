import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          D'art
        </a>
        
        <!--------- menu --------->
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" routerLink="/">Home</a>
            <a class="navbar-item" routerLink="/contact">Contact</a>
            <a class="navbar-item" routerLink="/gallery">Gallery</a>
            <a class="navbar-item" routerLink="/videos">Videos</a>
<!--            <a class="navbar-item" routerLink="/users">Users</a>-->
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
