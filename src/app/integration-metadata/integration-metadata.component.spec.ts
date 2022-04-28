import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationMetadataComponent } from './integration-metadata.component';

describe('IntegrationMetadataComponent', () => {
  let component: IntegrationMetadataComponent;
  let fixture: ComponentFixture<IntegrationMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
