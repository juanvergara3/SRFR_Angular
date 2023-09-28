import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesVistaFacturasComponent } from './modales-vista-facturas.component';

describe('ModalesVistaFacturasComponent', () => {
  let component: ModalesVistaFacturasComponent;
  let fixture: ComponentFixture<ModalesVistaFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesVistaFacturasComponent]
    });
    fixture = TestBed.createComponent(ModalesVistaFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
