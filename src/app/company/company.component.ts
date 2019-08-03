import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../employeeModel';
import { AttachSession } from 'protractor/built/driverProviders';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  employees: EmployeeModel[] = [];
  selected = null;

  employee = new EmployeeModel();
  deleteEmp = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.apiService.getAllEmployees().subscribe(
      res => {
        this.employees = res;
      },
      error => {
        alert('Something went wrong in GetAll error');
      }
    );
  }

  updateEmployeeById(employee: EmployeeModel) {
    this.apiService.updateEmployee(employee).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert('Something went wrong in Update error');
      }
    );
  }


  deleteEmployeeById(id) {
    if (confirm('Are you sure you want to Delete?')) {
      this.apiService.deleteEmployeeById(id).subscribe(
        res => {
          location.reload();
        },
        error => {
          alert('Error Could not Delete');
        }
      );
    }
  }




}
