import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksMarieesComponent } from './packs-mariees.component';

describe('PacksMarieesComponent', () => {
  let component: PacksMarieesComponent;
  let fixture: ComponentFixture<PacksMarieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksMarieesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksMarieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
