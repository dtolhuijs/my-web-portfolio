import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GallerySingleComponent } from './gallery-single/gallery-single.component';


@NgModule({
  declarations: [GalleryListComponent, GallerySingleComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
