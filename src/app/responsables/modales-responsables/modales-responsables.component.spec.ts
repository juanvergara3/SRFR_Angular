import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalesResponsablesComponent } from './modales-responsables.component';

describe('ModalesResponsablesComponent', () => {
  let component: ModalesResponsablesComponent;
  let fixture: ComponentFixture<ModalesResponsablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalesResponsablesComponent]
    });
    fixture = TestBed.createComponent(ModalesResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
