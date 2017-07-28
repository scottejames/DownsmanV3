import { Component, OnInit } from '@angular/core';
import { UserService } from "../data-service/user.service";

@Component({
  selector: 'dm-nav-bar',
  templateUrl: './navbar.component.html',
  styles : [`
        .nav.navbar-nav { font-size: 15px;}
        #searchForm { margin-right : 100px;}
        @media (max-width: 1200px) {#searchForm { display: none}}
        li > a.active {color: #F97924;}
      `]})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {
    var name = this.userService.getCurrentUser().userName
    console.log(name)
  }
  ngOnInit() {
  }

}
