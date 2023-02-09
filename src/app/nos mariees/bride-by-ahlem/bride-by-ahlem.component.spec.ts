import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideByAhlemComponent } from './bride-by-ahlem.component';

describe('BrideByAhlemComponent', () => {
  let component: BrideByAhlemComponent;
  let fixture: ComponentFixture<BrideByAhlemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideByAhlemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideByAhlemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
