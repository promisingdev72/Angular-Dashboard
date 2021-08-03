import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { ArchitectsComponent } from '../../architects/architects.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { AllocationBoxComponent } from '../../allocation-box/allocation-box.component';
import { UsersComponent } from '../../users/users.component';
import { DashboardAllocationComponent } from '../../dashboard-allocation/dashboard-allocation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
  declarations: [
    ArchitectsComponent,
    ProjectsComponent,
    AllocationBoxComponent,
    UsersComponent,
    DashboardAllocationComponent,
  ]
})

export class AdminLayoutModule {}
