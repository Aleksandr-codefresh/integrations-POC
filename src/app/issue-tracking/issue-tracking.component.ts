import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IIssueTrackingIntegration } from '../services/issue-tracking.service';

@Component({
  selector: 'app-issue-tracking',
  templateUrl: './issue-tracking.component.html',
  styleUrls: ['./issue-tracking.component.scss'],
})
export class IssueTrackingComponent {
  @Input() data: IIssueTrackingIntegration[] = [];
  @Input() loading?: boolean;
  @Output() delete = new EventEmitter<IIssueTrackingIntegration>();
}
