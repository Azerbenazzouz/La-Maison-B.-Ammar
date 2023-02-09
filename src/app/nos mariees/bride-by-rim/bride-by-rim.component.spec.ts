import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideByRimComponent } from './bride-by-rim.component';

describe('BrideByRimComponent', () => {
  let component: BrideByRimComponent;
  let fixture: ComponentFixture<BrideByRimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideByRimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideByRimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
