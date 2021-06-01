import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'client-side-solution';
  loggedIn = false;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name == "NavigationEnd") {
        this.loggedIn = this.userService.getToken() != null ;
      }
    })
  }

  logout() {
    this.userService.clearStorage();
    this.router.navigate(['']);
  }
}
