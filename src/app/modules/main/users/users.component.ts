import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading = false;
  userList: any[] = [];
  patientList: any[] = [];
  curentUser: any;
  curentPatient: any;
  modalEdit = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.getPatient();
  }

  async getUsers(){
    const result : any = await this.userService.getUser();
    if(result.statusCode===200 && result.rows.length){
      this.userList=result.rows;
      console.log(this.userList);
    }
  }

  async getPatient(){
    const result : any = await this.userService.getPatient();
    if(result.statusCode===200 && result.rows.length){
      this.patientList=result.rows;
      console.log(this.patientList);
    }
  }

  async onEdit(row){
    this.modalEdit=true;
    this.curentPatient=row;
  }

  async onSave(){
    this.modalEdit=false;
  }

}
