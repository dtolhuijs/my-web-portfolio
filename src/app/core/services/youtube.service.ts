import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  apiKey : string = 'AIzaSyBNeKSyt8S5i7T46KSyVMEvjKXg6JP2jks'

  constructor( public http: HttpClient) { }

  GetVideosForChannel(channel, maxResults) {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url).pipe(map((res) => {
      return res;
    }))
  }
}
