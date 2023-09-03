import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUbicacionesComponent } from './vista-ubicaciones.component';

describe('VistaUbicacionesComponent', () => {
  let component: VistaUbicacionesComponent;
  let fixture: ComponentFixture<VistaUbicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaUbicacionesComponent]
    });
    fixture = TestBed.createComponent(VistaUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
