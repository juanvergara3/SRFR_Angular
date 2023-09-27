import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesUbicacionesComponent } from './modales-ubicaciones.component';

describe('ModalesUbicacionesComponent', () => {
  let component: ModalesUbicacionesComponent;
  let fixture: ComponentFixture<ModalesUbicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesUbicacionesComponent]
    });
    fixture = TestBed.createComponent(ModalesUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
