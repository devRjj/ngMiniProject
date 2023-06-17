import { Component, OnInit } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private httpService: MiniProjectService){}

  ngOnInit(): void {
    this.onLogin()
  }
  
  onLogin(){
    this.httpService.fetchUserlist().subscribe(()=>{
      console.log('API is working')
    })
  }

}
