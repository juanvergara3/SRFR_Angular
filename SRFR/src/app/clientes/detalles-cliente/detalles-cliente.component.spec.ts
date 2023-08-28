import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClienteComponent } from './detalles-cliente.component';

describe('DetallesClienteComponent', () => {
  let component: DetallesClienteComponent;
  let fixture: ComponentFixture<DetallesClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesClienteComponent]
    });
    fixture = TestBed.createComponent(DetallesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
