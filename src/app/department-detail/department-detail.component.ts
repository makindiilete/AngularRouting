import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You selected department with the id = {{ departmentId }}</h3>
    <p>
      <button (click)="showOverview()" style="margin-right: 10px">
        Show Overview
      </button>
      <button (click)="showContact()">Show Contact</button>
    </p>
    <router-outlet></router-outlet>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <div>
      <button (click)="goToDepartments()">Back</button>
    </div>
  `,
  styles: [
    `
      a {
        color: #5d4f28;
        font-weight: bolder;
        margin: 0 10px;
        cursor: pointer;
      }
      h3 {
        margin-bottom: 100px;
      }
      button {
        background-color: #5d4f28;
        color: wheat;
        border: none;
        padding: 15px;
        cursor: pointer;
        margin-top: 10px;
      }
      button:hover {
        background-color: wheat;
        color: #5d4f28;
      }
    `,
  ],
})
export class DepartmentDetailComponent implements OnInit {
  departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // on component mount, from the current route snapshot, get the id parameter and assign it to the local Variable Id
    // this.departmentId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = parseInt(params.get('id'));
    });
  }

  goPrevious() {
    let previousId = this.departmentId > 1 ? this.departmentId - 1 : 1;
    this.router.navigate(['/departments', previousId]);
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId < 5 ? this.departmentId + 1 : 5;
    this.router.navigate(['/departments', nextId]);
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // navigating back to the department list view with an optional parameter of 'id' whose value is the currently selected department Id
    this.router.navigate(['/departments', { id: selectedId }]);
  }

  // CHILD ROUTES
  showOverview() {
    // to the current route i.e. http://localhost:4200/departments/departmentId , append 'overview' ==> http://localhost:4200/departments/3/overview
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  showContact() {
    // to the current route i.e. http://localhost:4200/departments/departmentId , append 'contact' ==> http://localhost:4200/departments/3/contact
    this.router.navigate(['contact'], { relativeTo: this.route });
  }
}
