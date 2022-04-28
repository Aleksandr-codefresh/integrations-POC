import { Router } from '@angular/router';

export abstract class IntegrationConfig {
  constructor(protected router: Router) {}

  abstract name: string;
  abstract description: string;
  abstract icon: string;
  abstract action(): void;

  buttonText = 'Add';
}
