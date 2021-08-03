import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllocationComponent } from './dashboard-allocation.component';

describe('NotificationsComponent', () => {
  let component: DashboardAllocationComponent;
  let fixture: ComponentFixture<DashboardAllocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
