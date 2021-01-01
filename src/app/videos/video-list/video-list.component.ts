import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {YoutubeService} from "../../core/services/youtube.service";

@Component({
  selector: 'app-video-list',
  template: `
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-3" *ngFor="let video of videos">
              <div class="card">
                <div class="card-content">
                  <a href="https://www.youtube.com/watch?v={{video.id.videoId}}" target="_blank">
                  <img [src]="video.snippet.thumbnails.medium.url" alt="..."></a>
                  <div>
                    <a href="https://www.youtube.com/watch?v={{video.id.videoId}}" target="_blank">{{video.snippet.title}}</a>
                     <p class="card-text">{{video.snippet.description}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `,
  styles: [
  ]
})
export class VideoListComponent implements OnInit {
  videos: any[];

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(()=> {
      this.spinner.hide()
    },3000)

    this.videos = [];
    this.youTubeService
        .GetVideosForChannel('UC_LtA_EtCr7Jp5ofOsYt18g', 10)
        .subscribe(lista => {
          for (let element of lista["items"]) {
            this.videos.push(element)
          }
        });
  }
}
