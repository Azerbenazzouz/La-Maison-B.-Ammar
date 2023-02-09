import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackforfaitItemComponent } from './packforfait-item.component';

describe('PackforfaitItemComponent', () => {
  let component: PackforfaitItemComponent;
  let fixture: ComponentFixture<PackforfaitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackforfaitItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackforfaitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
