import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoActivosComponent } from './grupo-activos.component';

describe('GrupoActivosComponent', () => {
  let component: GrupoActivosComponent;
  let fixture: ComponentFixture<GrupoActivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrupoActivosComponent]
    });
    fixture = TestBed.createComponent(GrupoActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
