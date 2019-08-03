import { EmployeeModel } from './employeeModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/company';
  private ALL_EMPLOYEES_URL = 'http://localhost:8080/company/employees';
  private NEW_EMPLOYEES_URL = `${this.BASE_URL}\\employees`;
  private UPDATE_EMPLOYEES_URL = `${this.BASE_URL}\\employees\\`;
  private DELETE_EMPLOYEES_URL = `${this.BASE_URL}\\employees\\`;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.ALL_EMPLOYEES_URL);
  }

  createEmployee(employee: EmployeeModel): Observable<any> {
    return this.http.post(this.NEW_EMPLOYEES_URL, employee);
  }

  updateEmployee(emp: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(this.UPDATE_EMPLOYEES_URL + '/' + emp.id, emp);
  }

  deleteEmployeeById(id: number): Observable<any> {
    return this.http.delete(this.DELETE_EMPLOYEES_URL + '/' + id);

  }


}
