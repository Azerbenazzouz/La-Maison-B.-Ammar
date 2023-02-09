import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinVisageComponent } from './soin-visage.component';

describe('SoinVisageComponent', () => {
  let component: SoinVisageComponent;
  let fixture: ComponentFixture<SoinVisageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinVisageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinVisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
