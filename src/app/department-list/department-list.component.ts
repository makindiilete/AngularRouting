import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul>
      <!--      if isSelected() returns true, we use 'selected' class else we use 'items' class-->
      <li
        (click)="onSelect(dept)"
        *ngFor="let dept of department_list"
        [class]="isSelected(dept) ? 'selected' : 'items'"
      >
        <span class="badge">{{ dept.id }}</span
        >{{ dept.name }}
      </li>
    </ul>
  `,
  styles: [
    `
      .selected {
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.53);
        color: white;
        margin: 10px;
        width: 150px;
        list-style: none;
        cursor: pointer;
        border-radius: 15px;
      }

      .items {
        padding: 20px;
        background-color: #5d4f28;
        color: wheat;
        margin: 10px;
        width: 150px;
        list-style: none;
        cursor: pointer;
        border-radius: 15px;
      }

      .items:hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
      }

      .badge {
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
        background-color: wheat;
        color: #5d4f28;
        padding: 20px;
        margin-right: 10px;
        margin-left: -20px;
      }
    `,
  ],
})
export class DepartmentListComponent implements OnInit {
  selectedId;
  department_list = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Ruby' },
    { id: 5, name: 'Bootstrap' },
  ];

  // inject the router for navigation
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
  }

  //ds method will navigate us using the router class to "/departments/departmentId"
  onSelect(department) {
    // absolute path navigation
    // U enter the route u want to navigate to and the route params u want to add
    // this.router.navigate(['/departments', department.id]);

    //Using relative navigation
    // whatever the current route is, just add the department id as a parameter to dt route
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  // we take d list of all departments and return true for the one dt the id equals to the current selectedId in the url optional params
  isSelected(department) {
    return department.id === this.selectedId;
  }
}
