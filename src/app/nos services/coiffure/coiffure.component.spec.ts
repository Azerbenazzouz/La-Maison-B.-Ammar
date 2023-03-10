import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoiffureComponent } from './coiffure.component';

describe('CoiffureComponent', () => {
  let component: CoiffureComponent;
  let fixture: ComponentFixture<CoiffureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoiffureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoiffureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
