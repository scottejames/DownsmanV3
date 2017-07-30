import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'downsman-app',
  template: `

        <dm-nav-bar></dm-nav-bar>
        <div class="main-background">
          <router-outlet></router-outlet>
        </div>
    `
})
export class DownsmanAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
