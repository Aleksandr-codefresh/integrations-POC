import { IntegrationConfig } from '../integrations-configs/integration-config';
import {
  IIssueTrackingIntegration,
  issueTrackerProvider,
  IssueTrackingService,
} from '../services/issue-tracking.service';

export class BaseTrackingIntegrations {
  integration: IntegrationConfig;
  listOfData: IIssueTrackingIntegration[] = [];
  isLoading = true;

  constructor(
    protected issueTrackingService: IssueTrackingService,
    protected provider: issueTrackerProvider
  ) {
    this.integration = issueTrackingService.getConfig(provider);
  }

  deleteData(integration: IIssueTrackingIntegration) {
    this.listOfData = this.listOfData.filter(
      (data) => data.name !== integration.name
    );
  }
}
