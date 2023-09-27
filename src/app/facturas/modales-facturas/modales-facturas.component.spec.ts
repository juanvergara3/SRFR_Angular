import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesFacturasComponent } from './modales-facturas.component';

describe('ModalesFacturasComponent', () => {
  let component: ModalesFacturasComponent;
  let fixture: ComponentFixture<ModalesFacturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesFacturasComponent]
    });
    fixture = TestBed.createComponent(ModalesFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
