import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../userlistModel';
import { MiniProjectService } from '../miniProject.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  
  updateForm!:FormGroup
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private httpService: MiniProjectService,
    private dialogReg: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.updateFormsControls();
    console.log('Data received', this.data)

    if(this.data != undefined && this.data.action == 'Edit'){
      this.updateForm.patchValue(this.data.rowData)
    }
  }

  updateFormsControls(){
    this.updateForm = this.fb.group({
      user_name: ['',[]],
      user_email: ['',[]],
      user_pwd: ['',[]],
      user_phone_no: ['',[Validators.maxLength(10)]],
      user_gender: ['', []]
    })
  }

  updateUserData(){
    this.httpService.updateUser('update_user', this.updateForm.value).subscribe(res =>{
      console.log(res);
    },
    (error)=>{
      console.log(error.message)
    })
  }


}
