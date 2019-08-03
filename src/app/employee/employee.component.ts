import { EmployeeModel } from './../employeeModel';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  newEmployee = new EmployeeModel();


  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.apiService.createEmployee(this.newEmployee).subscribe(
      value => {
        location.reload();
      },
      error => {
        alert('something went wrong error');
      }
    );
  }

}
