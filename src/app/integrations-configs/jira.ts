import { IntegrationConfig } from './integration-config';
import { Router } from '@angular/router';

export class JiraIntegrationConfig extends IntegrationConfig {
  constructor(protected router: Router) {
    super(router);
  }

  name = 'Atlassian Jira';
  description = 'Issue Tracking';
  icon = 'aim';

  action() {
    this.router.navigate(['jira']);
  }
}
