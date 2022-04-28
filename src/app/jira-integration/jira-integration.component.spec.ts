import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraIntegrationComponent } from './jira-integration.component';

describe('JiraIntegrationComponent', () => {
  let component: JiraIntegrationComponent;
  let fixture: ComponentFixture<JiraIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
