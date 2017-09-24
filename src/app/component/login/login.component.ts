import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, ValidationErrors} from '@angular/forms';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmit: boolean = false;
  postError: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        LoginComponent.userNameValidator
        ]
      )],
      password: ['', Validators.required]
    });
  }

  static userNameValidator(control: FormControl): ValidationErrors {
    const reg = /^[0-9]{11}$/;
    if (!reg.test(control.value)) {
      return {'error': true};
    }
  }

  ngOnInit() {
  }

  onSubmit(): any {
    console.log(this.loginForm);
    this.isSubmit = true;
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe(
          data => {
            console.log(data);
          },
          err => {
            this.postError = true;
            this.loginForm.reset();
          }
        );
    } else {
      this.loginForm.reset();
    }
  }

}
