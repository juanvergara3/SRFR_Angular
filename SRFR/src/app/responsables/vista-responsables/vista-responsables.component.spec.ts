import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaResponsablesComponent } from './vista-responsables.component';

describe('VistaResponsablesComponent', () => {
  let component: VistaResponsablesComponent;
  let fixture: ComponentFixture<VistaResponsablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaResponsablesComponent]
    });
    fixture = TestBed.createComponent(VistaResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
