import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectsModalComponent } from './architects-modal.component';

describe('ArchitectsModalComponent', () => {
  let component: ArchitectsModalComponent;
  let fixture: ComponentFixture<ArchitectsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
