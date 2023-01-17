import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private auth: AuthService) { }

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
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );

  }
}



