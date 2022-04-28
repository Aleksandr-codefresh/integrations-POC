import { Injectable, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JiraIntegrationConfig } from '../integrations-configs';
import { IntegrationConfig } from '../integrations-configs/integration-config';

export interface IIssueTrackingIntegration {
  name: string;
  runtime: string;
  status: string;
  value: string;
}

export enum issueTrackerProvider {
  JIRA = 'jira',
}

@Injectable({ providedIn: 'root' })
export class IssueTrackingService {
  constructor(private router: Router) {}

  fetchJiraIntegrations() {
    return new Observable<IIssueTrackingIntegration[]>((subscriber) => {
      setTimeout(() => {
        subscriber.next([
          {
            name: 'US-jira',
            runtime: 'Production Runtime',
            status: 'Synced',
            value: 'Some value'
          },
        ]);
        subscriber.complete();
      }, 1000);
    });
  }

  getConfig(provider: issueTrackerProvider): IntegrationConfig {
    let config: Type<IntegrationConfig>;
    switch (provider) {
      case issueTrackerProvider.JIRA:
        config = JiraIntegrationConfig;
        break;
      default:
        config = JiraIntegrationConfig;
    }

    return new config(this.router);
  }
}
