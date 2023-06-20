import { Component, OnInit } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  hide: boolean = true;
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private httpService: MiniProjectService){}

  ngOnInit(): void {
    this.registrationFormControls();
  }

  registrationFormControls(){
    this.registrationForm = this.fb.group({
      user_name: ['',[]],
      user_email: ['',[]],
      user_pwd: ['',[]],
      user_phone_no: ['',[Validators.maxLength(10)]],
      user_gender: ['', []]
    })
  }

  onSubmit(){
    console.log(this.registrationForm.value);

    var obj = new FormData();
    obj.set('user_name', this.registrationForm.get('user_name')?.value)
    obj.set('user_email', this.registrationForm.get('user_email')?.value)
    obj.set('user_contact_no', this.registrationForm.get('user_phone_no')?.value)
    obj.set('user_password', this.registrationForm.get('user_pwd')?.value)
    obj.set('user_gender', this.registrationForm.get('user_gender')?.value)

    this.httpService.addUser("Register", obj).subscribe((el)=>{
      console.log(el);
    })
  }

}
