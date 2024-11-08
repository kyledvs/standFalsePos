import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternacomsComponent } from './internacoms.component';

describe('InternacomsComponent', () => {
  let component: InternacomsComponent;
  let fixture: ComponentFixture<InternacomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternacomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternacomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
