import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionDesCilsComponent } from './extension-des-cils.component';

describe('ExtensionDesCilsComponent', () => {
  let component: ExtensionDesCilsComponent;
  let fixture: ComponentFixture<ExtensionDesCilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensionDesCilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionDesCilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
