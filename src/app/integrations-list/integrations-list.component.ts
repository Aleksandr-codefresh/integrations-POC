import { Component, Input, OnInit } from '@angular/core';
import { IntegrationConfig } from '../integrations-configs/integration-config'

@Component({
  selector: 'app-integrations-list',
  templateUrl: './integrations-list.component.html',
  styleUrls: ['./integrations-list.component.scss'],
})
export class IntegrationsListComponent {
  @Input() integrations: IntegrationConfig[] = [];
}
