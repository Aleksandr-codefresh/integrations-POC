import { IntegrationConfig } from '../integrations-configs/integration-config';
import {
  containeRegistryProvider,
  ContainerRegistryService,
  IRegistryIntegration,
} from '../services/container-registry.service';
import { IIssueTrackingIntegration } from '../services/issue-tracking.service';

export class BaseRegistryIntegrations {
  integration: IntegrationConfig;
  isLoading = true;
  listOfData: IRegistryIntegration[] = [];

  constructor(
    protected containerRegistryService: ContainerRegistryService,
    protected provider: containeRegistryProvider
  ) {
    this.integration = containerRegistryService.getConfig(provider);
  }

  deleteData(integration: IIssueTrackingIntegration) {
    this.listOfData = this.listOfData.filter(
      (data) => data.name !== integration.name
    );
  }
}
