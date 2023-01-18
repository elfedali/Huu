import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenService } from '../_services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  public backgroundImage = 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  constructor(private auth: AuthService, private token: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('Safouan', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('safouan@mail.com', [Validators.required, Validators.email]),
      password: new FormControl('password', [Validators.required, Validators.minLength(4)]),
    });
  }

  onSubmit() {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.auth.register(this.form.value.name, this.form.value.email, this.form.value.password)
      .subscribe(
        data => {
          console.log(data);
          this.loading = false;
          this.token.signOut(); //
          this.router.navigate(['/login']);
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );

  }
}



