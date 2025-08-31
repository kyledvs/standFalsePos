import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentOverlayComponent } from './development-overlay.component';

describe('DevelopmentOverlayComponent', () => {
  let component: DevelopmentOverlayComponent;
  let fixture: ComponentFixture<DevelopmentOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopmentOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
