import { Component, OnInit } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: MiniProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormControls();
  }

  loginFormControls() {
    this.loginForm = this.fb.group({
      user_email: ['', [Validators.required]],
      user_pwd: ['', [Validators.required]],
    });
  }

  onLogin() {
    this.httpService
      .fetchUserForLogin(
        'login',
        this.loginForm.get('user_email')?.value,
        this.loginForm.get('user_pwd')?.value
      )
      .subscribe((el: any) => {
        console.log(el.status);
        if(el && el.status != 1){
          alert('Please enter valid credentials');
          this.loginForm.reset();
        }else{
          this.router.navigate(['/userlist'])
        }
      });
  }
}
