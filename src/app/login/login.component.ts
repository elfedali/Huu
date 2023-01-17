import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;


  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('hello@mail.com', Validators.required),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}

