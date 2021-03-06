import { UserService } from 'src/app/services/user.service';
import { MainService } from './../../../services/main.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  rowSelected: any = {};
  loading = false;
  modalEdit = false;
  currentRow: any;

  constructor(
    private mainService: MainService,
    private alertService: AlertService,
    private userService : UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    this.loading = true;
    const result: any = await this.userService.getUser();
    if (result.results) {
      this.users = result.results;
    }
    this.loading = false;
  }

  onEdit(row) {
    this.rowSelected = row;
    this.modalEdit = true;
  }

  async onDelete(row) {
    const confirmed: any = await this.alertService.confirm('', 'Delete confirm?');
    if (confirmed.value) {
      // ....
    }
  }

  async onSave() {
    const confirmed: any = await this.alertService.confirm('', 'Save confirm?');
    if (confirmed.value) {
      // ....
      this.modalEdit = false;
    }
  }
}

