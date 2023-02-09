import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoinCheveuxComponent } from './soin-cheveux.component';

describe('SoinCheveuxComponent', () => {
  let component: SoinCheveuxComponent;
  let fixture: ComponentFixture<SoinCheveuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoinCheveuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoinCheveuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
