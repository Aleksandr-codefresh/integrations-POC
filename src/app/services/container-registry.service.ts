import { Injectable, Type } from '@angular/core';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { DockerHubIntegrationConfig, QuayIntegrationConfig } from '../integrations-configs'
import { IntegrationConfig } from '../integrations-configs/integration-config'

export interface IRegistryIntegration {
  name: string;
  runtime: string;
  status: string;
}

export enum containeRegistryProvider {
  DOCKERHUB = 'dockerhub',
  QUAY = 'quay',
}

@Injectable({ providedIn: 'root' })
export class ContainerRegistryService {
  constructor(private router: Router) {}

  fetchDockerHubIntegrations() {
    return new Observable<IRegistryIntegration[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next([
          {
            name: 'production-docker',
            runtime: 'Production Runtime',
            status: 'Synced',
          },
          {
            name: 'staging-docker',
            runtime: 'Staging Runtime',
            status: 'Synced',
          },
        ]);
        subscriber.complete();
      }, 2000);
    });
  }

  fetchQuayIntegrations() {
    return new Observable<IRegistryIntegration[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next([
          {
            name: 'test-quay',
            runtime: 'Test Runtime',
            status: 'Syncing',
          },
          {
            name: 'staging-quay',
            runtime: 'Staging Runtime',
            status: 'Failed',
          },
          {
            name: 'prod-quay',
            runtime: 'Production Runtime',
            status: 'Failed',
          },
        ]);
        subscriber.complete();
      }, 1000);
    });
  }


  getConfig(provider: containeRegistryProvider): IntegrationConfig {
    let config: Type<IntegrationConfig>
    switch(provider) {
      case containeRegistryProvider.DOCKERHUB:
        config = DockerHubIntegrationConfig
        break
      case containeRegistryProvider.QUAY:
        config = QuayIntegrationConfig
        break
      default:
        config = DockerHubIntegrationConfig
    }

    return new config(this.router)
  }
}
