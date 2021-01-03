import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'gallery',
    loadChildren: () => import( './gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'users',
    loadChildren: () => import( './users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'videos',
    loadChildren:  () => import('./videos/videos.module').then(m => m.VideosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
