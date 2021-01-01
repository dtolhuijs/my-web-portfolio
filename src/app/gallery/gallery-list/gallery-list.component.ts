import { Component, OnInit } from '@angular/core';
import { GALLERY } from "../../mock-gallery";
import { Gallery} from "../../gallery";

@Component({
  selector: 'app-gallery-list',
  template: `
    <section class="hero is-light is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">My Artwork</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-2" *ngFor="let gallery of galleryList">
            <div class="card">
              <div class="card-content">
                <img src="{{gallery.img}}" alt="{{gallery.name}}">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  `,
  styles: [`
    .hero {
      background-image: url("../../../assets/images/rose.jpg") !important;
      background-size: cover;
      background-position: center center;
    }
  `
  ]
})
export class GalleryListComponent implements OnInit {

  galleryList: Gallery[];
  gallery: any;

  constructor() { }

  ngOnInit(): void {
    this.galleryList = GALLERY;
    console.log(this.galleryList);
  }

}
