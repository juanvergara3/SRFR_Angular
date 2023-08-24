import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaActivosComponent } from './vista-activos.component';

describe('VistaActivosComponent', () => {
  let component: VistaActivosComponent;
  let fixture: ComponentFixture<VistaActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaActivosComponent]
    });
    fixture = TestBed.createComponent(VistaActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
