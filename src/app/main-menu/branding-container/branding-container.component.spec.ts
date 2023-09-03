import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingContainerComponent } from './branding-container.component';

describe('BrandingContainerComponent', () => {
  let component: BrandingContainerComponent;
  let fixture: ComponentFixture<BrandingContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandingContainerComponent]
    });
    fixture = TestBed.createComponent(BrandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
