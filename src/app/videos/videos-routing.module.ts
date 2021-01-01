import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoListComponent} from "./video-list/video-list.component";
import {VideoSingleComponent} from "./video-single/video-single.component";

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'videoid',
    component: VideoSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
