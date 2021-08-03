import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationBoxComponent } from './allocation-box.component';

describe('TableListComponent', () => {
  let component: AllocationBoxComponent;
  let fixture: ComponentFixture<AllocationBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocationBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
