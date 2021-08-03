import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArchitectsModalComponent } from './architects-modal/architects-modal.component';
import { UsersModalComponent } from './users-modal/users-modal.component';
import { ProjectsModalComponent } from './projects-modal/projects-modal.component';
import { AllocationModalComponent } from './allocation-modal/allocation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ArchitectsModalComponent,
    UsersModalComponent,
    ProjectsModalComponent,
    AllocationModalComponent,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
