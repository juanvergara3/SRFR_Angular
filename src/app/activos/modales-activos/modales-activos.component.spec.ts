import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesActivosComponent } from './modales-activos.component';

describe('ModalesActivosComponent', () => {
  let component: ModalesActivosComponent;
  let fixture: ComponentFixture<ModalesActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesActivosComponent]
    });
    fixture = TestBed.createComponent(ModalesActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
