import { Component, OnInit, ViewChild } from '@angular/core';
import { MiniProjectService } from '../miniProject.service';
import { UserModel } from '../userlistModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';
import { DeletionComponent } from '../deletion/deletion.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  
  displayedColumns: string[] = ['user_id', 'user_name', 'user_email', 'user_pwd', 'user_phone_no', 'user_gender', 'user_reg_date', 'action'];

  userList: UserModel[] = [];
  dataSource:any;
 
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private httpService:MiniProjectService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.httpService.getAllData().subscribe((response:any)=> {
      this.userList = response.data

      this.dataSource = new MatTableDataSource<UserModel>(this.userList);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }


  onFilter(event:Event){
    const filterVal = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterVal;
  }

  getRow(row:any){
    // console.log(row);
  }

  // onEdit(body:any){
  //   console.log(body);

  //   this.httpService.updateUser('update_user', body).subscribe(
  //     (el)=>{
  //     console.log(el)
  //   },
  //   (error)=>{
  //     console.log(error.message)
  //   })
  // }

  openEditDialog(user: any){
    let config = new MatDialogConfig();
    config.width = '800px'
    config.data = {
      'action': 'Edit',
      'rowData': user
    }

    const dialogRef = this.dialog.open(EditComponent, config);
    // console.log(user);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // this.userList.splice((user.user_id - 1), 1)

      // if(result){
      //   this.httpService.updateUser('update_user', result).subscribe((updatedUser)=>{
      //     console.log('Updated user: ', updatedUser);
      //   })
      // }
    })
  }

  openDeleteDialog(element: UserModel){
    let delConfig = new MatDialogConfig();
    delConfig.width = '500px';
    delConfig.data = {
      'action': 'delete',
      'user_id': element
    }

    const dialogRef = this.dialog.open(DeletionComponent, delConfig);
    // console.log(element);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getUserData()
    })
  }

  // onDelete(delUserId:any){
  //   console.log(delUserId);
  //   this.httpService.deleteUser('remove_user', delUserId).subscribe(
  //     (response)=>{
  //     console.log(response)
  //   },
  //   (error)=>{
  //     console.log(error.message)
  //   })
  // }
}
