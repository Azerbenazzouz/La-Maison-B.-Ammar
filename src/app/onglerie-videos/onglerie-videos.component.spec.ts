import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnglerieVideosComponent } from './onglerie-videos.component';

describe('OnglerieVideosComponent', () => {
  let component: OnglerieVideosComponent;
  let fixture: ComponentFixture<OnglerieVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnglerieVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnglerieVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
