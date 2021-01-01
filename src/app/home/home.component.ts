import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            D'art
          </h1>
          <h2 class="subtitle">
            l'art pour l'art
          </h2>
        </div>
      </div>
    </section>
  `,
  styles: [`
      .hero {
        background-image: url("../../assets/images/green-leaves.jpg") !important;
        background-size: cover;
        background-position: center center;
      }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
