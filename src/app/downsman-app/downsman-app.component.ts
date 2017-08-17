import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'downsman-app',
  template: `

        <nav-bar></nav-bar>
        <div class="routing-outlet">
          <router-outlet></router-outlet>
        </div>
    `
})
export class DownsmanAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
