import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuayIntegrationComponent } from './quay-integration.component';

describe('QuayIntegrationComponent', () => {
  let component: QuayIntegrationComponent;
  let fixture: ComponentFixture<QuayIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuayIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuayIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
