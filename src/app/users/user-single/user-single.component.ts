import { Component, OnInit } from '@angular/core';
import {UserService} from "../../core/services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-single',
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="user">
          <img [src]="user.avatar_url" alt="{{user.login}}">
          <h2>{{ user.login }}</h2>
        </div>
      </div>
    </section>
  `,
  styles: [
  ]
})

export class UserSingleComponent implements OnInit {
  user;

  constructor(
      private userService:  UserService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // grab the username out of the url
    this.route.params.subscribe(params => {
      const username = params['username']

      // use the userservice to get data from github api
      this.userService.getUser(username)
          .subscribe(user => this.user = user );
    })
  }
}
