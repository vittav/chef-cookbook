import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  isLogin: boolean = false
  errorMessage: any;

  constructor(private userService: UserService,
              public actRoute: ActivatedRoute,
              public router: Router
            ) { }

  ngOnInit(): void {
    this.isUserLogin();
    if (this.isLogin) {
      this.router.navigate(['recipes'])
    }
  }

  onSubmit(form: { value: { email: string; password: string; }; }) {
    console.log('Your form data: ', form.value)
    
    this.userService.login(form.value).subscribe((res: any) => {
      if (res.success) {
        this.userService.setDataInLocalStorage('userData', JSON.stringify(res.user));

        this.userService.setDataInLocalStorage('token', res.token);

        this.router.navigate(['recipes']);
      } else {
        console.log(res);

        alert(res.msg)
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin() {
    if (this.userService.getUserDetails() != null) {
      this.isLogin = true;
    }
  }

  logout(){
    this.userService.clearStorage();
    this.router.navigate(['']);
  }

}
