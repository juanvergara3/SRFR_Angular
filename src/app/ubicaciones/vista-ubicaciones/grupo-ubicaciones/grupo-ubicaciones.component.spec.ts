import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoUbicacionesComponent } from './grupo-ubicaciones.component';

describe('GrupoUbicacionesComponent', () => {
  let component: GrupoUbicacionesComponent;
  let fixture: ComponentFixture<GrupoUbicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoUbicacionesComponent]
    });
    fixture = TestBed.createComponent(GrupoUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
