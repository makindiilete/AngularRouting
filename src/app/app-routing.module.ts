import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  //Homepage will be redirected to /departments route
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent },
  //':id' is d placeholder/variable of our route params and since we are passing department id, we name it :id... if we are passing name, we sud name it :name
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    // Here we specify the children routes of d department details component
    children: [
      // default child route to b selected on d department detail component
      { path: '', component: DepartmentContactComponent, pathMatch: 'full' },
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
      // not found child route
      { path: '**', component: NotFoundPageComponent },
    ],
  },
  { path: 'employees', component: EmployeeListComponent },
  //any route dt does not match any of the route above will be redirected to this page
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  NotFoundPageComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
];
