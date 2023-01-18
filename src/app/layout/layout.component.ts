import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {



  user: any = {};

  constructor(private userService: UserService, private auth: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.user = this.userService.getLoggedInUser();
  }
  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
