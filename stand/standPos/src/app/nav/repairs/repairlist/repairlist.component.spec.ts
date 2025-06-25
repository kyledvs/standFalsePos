import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairlistComponent } from './repairlist.component';

describe('RepairlistComponent', () => {
  let component: RepairlistComponent;
  let fixture: ComponentFixture<RepairlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepairlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
