import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrideByMirouComponent } from './bride-by-mirou.component';

describe('BrideByMirouComponent', () => {
  let component: BrideByMirouComponent;
  let fixture: ComponentFixture<BrideByMirouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrideByMirouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrideByMirouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
