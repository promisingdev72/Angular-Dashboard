import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsComponent } from './architects.component';

describe('DashboardComponent', () => {
  let component: ArchitectsComponent;
  let fixture: ComponentFixture<ArchitectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
