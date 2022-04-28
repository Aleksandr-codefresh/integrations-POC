import { Component } from '@angular/core';
import { IntegrationConfig } from './integrations-configs/integration-config';
import {
  issueTrackerProvider,
  IssueTrackingService,
} from './services/issue-tracking.service';
import {
  containeRegistryProvider,
  ContainerRegistryService,
} from './services/container-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  integrations: IntegrationConfig[];

  constructor(
    private containerRegistryService: ContainerRegistryService,
    private issueTrackingService: IssueTrackingService
  ) {
    this.integrations = [
      this.containerRegistryService.getConfig(
        containeRegistryProvider.DOCKERHUB
      ),
      this.containerRegistryService.getConfig(containeRegistryProvider.QUAY),
      this.issueTrackingService.getConfig(issueTrackerProvider.JIRA),
    ];
  }
}
