import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompanyComponent } from './company/company.component';
import { Router, Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavigationComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
