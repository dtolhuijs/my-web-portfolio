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
        <div class="elfsight-app-bf12a196-7128-4cba-8c62-7a2b4a7f827e"></div>
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
