import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideByInesComponent } from './bride-by-ines.component';

describe('BrideByInesComponent', () => {
  let component: BrideByInesComponent;
  let fixture: ComponentFixture<BrideByInesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideByInesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideByInesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
