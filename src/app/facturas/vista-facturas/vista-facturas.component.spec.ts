import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFacturasComponent } from './vista-facturas.component';

describe('VistaFacturasComponent', () => {
  let component: VistaFacturasComponent;
  let fixture: ComponentFixture<VistaFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaFacturasComponent]
    });
    fixture = TestBed.createComponent(VistaFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
