import { Routes } from '@angular/router';

import { ArchitectsComponent } from '../../architects/architects.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { AllocationBoxComponent } from '../../allocation-box/allocation-box.component';
import { UsersComponent } from '../../users/users.component';
import { DashboardAllocationComponent } from '../../dashboard-allocation/dashboard-allocation.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'architects',      component: ArchitectsComponent },
    { path: 'projects',   component: ProjectsComponent },
    { path: 'allocation-box',     component: AllocationBoxComponent },
    { path: 'users',     component: UsersComponent },
    { path: 'dashboard-allocation',  component: DashboardAllocationComponent },
];
