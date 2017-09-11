import { Component, OnInit } from '@angular/core';
import { UserService } from "../data-services/user.service";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {
    var name = this.userService.getCurrentUser().userName
    console.log(name)
  }
  getUserService():UserService{
    return this.userService
  }
  ngOnInit() {
  }

}
