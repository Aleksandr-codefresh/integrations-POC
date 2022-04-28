import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerhubIntegrationComponent } from './dockerhub-integration.component';

describe('DockerhubIntegrationComponent', () => {
  let component: DockerhubIntegrationComponent;
  let fixture: ComponentFixture<DockerhubIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerhubIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerhubIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
