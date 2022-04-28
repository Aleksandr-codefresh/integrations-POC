import { IntegrationConfig } from '../integrations-configs/integration-config';
import {
  containeRegistryProvider,
  ContainerRegistryService,
  IRegistryIntegration,
} from '../services/container-registry.service';

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

  deleteData(integration: IRegistryIntegration) {
    this.listOfData = this.listOfData.filter(
      (data) => data.name !== integration.name
    );
  }
}
