import { Router } from '@angular/router';
import { IntegrationConfig } from './integration-config'

export class DockerHubIntegrationConfig extends IntegrationConfig {
  constructor(protected router: Router) {
    super(router);
  }

  name = 'Docker Hub';
  description = 'Container Registry';
  icon = 'ci';

  action() {
    this.router.navigate(['dockerhub']);
  }
}
