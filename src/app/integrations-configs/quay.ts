import { IntegrationConfig } from './integration-config';
import { Router } from '@angular/router';

export class QuayIntegrationConfig extends IntegrationConfig {
  constructor(protected router: Router) {
    super(router);
  }

  name = 'Quay';
  description = 'Container Registry';
  icon = 'bug';

  action() {
    this.router.navigate(['quay']);
  }
}
