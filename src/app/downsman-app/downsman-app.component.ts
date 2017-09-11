import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'downsman-app',
  template: `

        <nav-bar></nav-bar>
        <div class="sidebar" style="width:0"></div>
        
        <div class="routing-outlet" style="margin:0">
          <router-outlet></router-outlet>
        </div>
    `
})
export class DownsmanAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
