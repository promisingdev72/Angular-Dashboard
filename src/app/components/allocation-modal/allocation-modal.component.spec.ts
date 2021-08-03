import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationModalComponent } from './allocation-modal.component';

describe('AllocationModalComponent', () => {
  let component: AllocationModalComponent;
  let fixture: ComponentFixture<AllocationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
