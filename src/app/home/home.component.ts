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
          <div class="container">
            <span class="icon is-large">
              <a href="https://github.com/dtolhuijs" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </span>
              <span class="icon is-large">
              <a href="https://www.linkedin.com/in/deisibonilla/" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span class="icon is-large">
              <a href="https://twitter.com/deisi_bonilla" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </span>
            <span class="icon is-large">
              <a href="mailto:deisi.bonilla@gmail.com" target="_blank">
                <i class="fas fa-envelope-square"></i>
              </a>
            </span>
          </div>
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
      .fas, .fab {
        font-size: 26px;
      }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
