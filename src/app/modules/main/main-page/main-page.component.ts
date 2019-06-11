import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LibService } from 'src/app/services/lib.service';
import { LibPrefixService } from './../../../services/lib-prefix.service';
import { MainService } from 'src/app/services/main.service';
import * as moment from 'moment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  users: any[];
  columnName = 'hn';
  searchValue = '';
  modalEdit = false;
  modalAdd = false;
  currentRow: any;
  patientList: any[] = [];
  patient: any[];
  prefixList: any[];
  clinicList: any[];

  constructor(
    private mainService: MainService,
    private userService: UserService,
    private libService: LibService,
    private libPrefixService: LibPrefixService,
    private alert: AlertService
  ) { }

  async ngOnInit() {
    this.getPatient();
    const result2 = await this.libService.getClinic();
    if (result2.statusCode === 200) {
      this.clinicList = result2.rows;
    }
    console.log(result2);
  }

  async onSearch() {
    if (this.searchValue) {
      const result: any = await this.userService.searchPatient(this.columnName, this.searchValue);
      console.log(result);
      if (result.statusCode === 200) {
        this.patientList = result.rows;
      } else {
        console.log('get user error', result);
      }
    }

  }

  async onEdit(row) {
    this.currentRow = Object.assign({}, row);
    this.currentRow.mode = "edit";
    this.modalEdit = true;
  }

  async onAdd(row) {
    this.currentRow = Object.assign({},row);
    this.currentRow.mode ="add";
    console.log(row);
    console.log(this.currentRow);
    this.modalAdd = true;
  }

  async getPatient() {
    const result: any = await this.userService.getPatient();
    if (result.statusCode === 200 && result.rows.length) {
      this.patientList = result.rows;
      console.log(this.patientList);
    } else {
      console.log('get user error', result);
    }
  }

  async getPrefix() {
    const result = await this.libPrefixService.getPrefix();
    if (result.statusCode === 200) {
      this.prefixList = result.rows;
    }
  }

  async onSave() {
    let data = {
      hn: this.currentRow.hn,
      dep: this.currentRow.dep,
      date: moment().locale("th").format("YYYY-MM-DD"),
      time: moment().locale("th").format("HH:mm")
    };
    console.log(this.currentRow);
    let result: any = await this.mainService.insertVisit(data);
    console.log('insert', result);
    if (result.statusCode === 200) {
      this.alert.success("success", this.currentRow.mode);
      this.modalAdd = false;
    } else {
      this.alert.error(result.message, "error");
    }

  }

}
