import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesResponsableComponent } from './detalles-responsable.component';

describe('DetallesResponsableComponent', () => {
  let component: DetallesResponsableComponent;
  let fixture: ComponentFixture<DetallesResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesResponsableComponent]
    });
    fixture = TestBed.createComponent(DetallesResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
