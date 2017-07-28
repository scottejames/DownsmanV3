import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'downsman-app',
  template: `
        <dm-nav-bar></dm-nav-bar>
        <router-outlet></router-outlet>
    `
})
export class DownsmanAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
