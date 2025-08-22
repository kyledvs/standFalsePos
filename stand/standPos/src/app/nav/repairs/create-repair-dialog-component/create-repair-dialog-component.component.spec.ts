import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRepairDialogComponentComponent } from './create-repair-dialog-component.component';

describe('CreateRepairDialogComponentComponent', () => {
  let component: CreateRepairDialogComponentComponent;
  let fixture: ComponentFixture<CreateRepairDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRepairDialogComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRepairDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
