import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryListComponent} from "./gallery-list/gallery-list.component";
import {GallerySingleComponent} from "./gallery-single/gallery-single.component";

const routes: Routes = [
  {
    path: '',
    component: GalleryListComponent
  },
  {
    path: ':artworkname',
    component: GallerySingleComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
