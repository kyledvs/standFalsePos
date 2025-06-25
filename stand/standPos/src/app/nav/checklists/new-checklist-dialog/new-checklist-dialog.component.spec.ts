import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChecklistDialogComponent } from './new-checklist-dialog.component';

describe('NewChecklistDialogComponent', () => {
  let component: NewChecklistDialogComponent;
  let fixture: ComponentFixture<NewChecklistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewChecklistDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChecklistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
