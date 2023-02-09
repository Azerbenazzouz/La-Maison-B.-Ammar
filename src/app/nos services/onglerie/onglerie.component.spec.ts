import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnglerieComponent } from './onglerie.component';

describe('OnglerieComponent', () => {
  let component: OnglerieComponent;
  let fixture: ComponentFixture<OnglerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnglerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnglerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
