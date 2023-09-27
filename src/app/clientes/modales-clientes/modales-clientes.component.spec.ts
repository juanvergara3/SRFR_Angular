import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesClientesComponent } from './modales-clientes.component';

describe('ModalesClientesComponent', () => {
  let component: ModalesClientesComponent;
  let fixture: ComponentFixture<ModalesClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesClientesComponent]
    });
    fixture = TestBed.createComponent(ModalesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
