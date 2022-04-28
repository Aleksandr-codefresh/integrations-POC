import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BaseTrackingIntegrations } from '../issue-tracking/base-tracking-integration';
import {
  issueTrackerProvider,
  IssueTrackingService,
} from '../services/issue-tracking.service';

@Component({
  selector: 'app-jira-integration',
  templateUrl: './jira-integration.component.html',
  styleUrls: ['./jira-integration.component.scss'],
})
export class JiraIntegrationComponent
  extends BaseTrackingIntegrations
  implements OnInit
{
  constructor(protected issueTrackingService: IssueTrackingService) {
    super(issueTrackingService, issueTrackerProvider.JIRA);
  }

  ngOnInit(): void {
    this.issueTrackingService
      .fetchJiraIntegrations()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => (this.listOfData = data));
  }
}
