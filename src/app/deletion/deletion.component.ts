import { Component, Inject, OnInit } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletion',
  templateUrl: './deletion.component.html',
  styleUrls: ['./deletion.component.css']
})
export class DeletionComponent implements OnInit{
  constructor(
    private httpService: MiniProjectService,
    private dialogRef: MatDialogRef<DeletionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ){}

  ngOnInit(): void {
    
    console.log('Received Data', this.data)
  }

  onDelete(){
    if(this.data != undefined && this.data.action == 'delete'){
      this.httpService.deleteUser('remove_user', this.data.user_id).subscribe((del:any)=>{
        console.log('Deleted user', del)
      },
      (error:any)=>{
        console.log(error.message);
      })
    }
  }
}

