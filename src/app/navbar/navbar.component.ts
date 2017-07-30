import { Component, OnInit } from '@angular/core';
import { UserService } from "../data-service/user.service";

@Component({
  selector: 'dm-nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {
    var name = this.userService.getCurrentUser().userName
    console.log(name)
  }
  ngOnInit() {
  }

}
