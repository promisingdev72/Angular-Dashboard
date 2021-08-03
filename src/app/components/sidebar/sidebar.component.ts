import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/architects', title: 'Architects',  icon: 'fas fa-tasks'},
    { path: '/projects', title: 'Projects',  icon:'far fa-window-maximize'},
    { path: '/allocation-box', title: 'Allocation Box',  icon:'fas fa-random'},
    { path: '/users', title: 'Users',  icon:'fas fa-user-check'},
    { path: '/dashboard-allocation', title: 'Dashboard Allocation',  icon:'fas fa-tachometer-alt'},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
