import { Component, OnInit } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  constructor(private httpService: MiniProjectService, private route: ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.route);
  }

}
