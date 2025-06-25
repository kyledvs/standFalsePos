import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadrepairxlsComponent } from './uploadrepairxls.component';

describe('UploadrepairxlsComponent', () => {
  let component: UploadrepairxlsComponent;
  let fixture: ComponentFixture<UploadrepairxlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadrepairxlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadrepairxlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
