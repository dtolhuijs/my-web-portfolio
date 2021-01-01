import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {UserService} from "./services/user.service";
import {RouterModule} from "@angular/router";
import {YoutubeService} from "./services/youtube.service";



@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [
      UserService,
      YoutubeService
  ]
})
export class CoreModule { }
