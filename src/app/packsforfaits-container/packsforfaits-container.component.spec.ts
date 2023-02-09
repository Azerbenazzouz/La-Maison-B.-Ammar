import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksforfaitsContainerComponent } from './packsforfaits-container.component';

describe('PacksforfaitsContainerComponent', () => {
  let component: PacksforfaitsContainerComponent;
  let fixture: ComponentFixture<PacksforfaitsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksforfaitsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacksforfaitsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
