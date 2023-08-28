import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActivoComponent } from './detalles-activo.component';

describe('DetallesActivoComponent', () => {
  let component: DetallesActivoComponent;
  let fixture: ComponentFixture<DetallesActivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesActivoComponent]
    });
    fixture = TestBed.createComponent(DetallesActivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
