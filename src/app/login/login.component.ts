import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenService } from '../_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('hello@mail.com', Validators.required),
      password: new FormControl('password', [Validators.required])
    });
    if (this.token.getAccessToken()) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.auth.login(this.form.value.email, this.form.value.password)
      .subscribe(
        data => {
          console.log(data);
          this.token.setAccessToken(data.access_token);
          this.loading = false;
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );

  }
}

