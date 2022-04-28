import { Component, Input, OnInit } from '@angular/core';
import { IntegrationConfig } from '../integrations-configs/integration-config'

@Component({
  selector: 'app-integration-item',
  templateUrl: './integration-item.component.html',
  styleUrls: ['./integration-item.component.scss']
})
export class IntegrationItemComponent {
  @Input() integration?: IntegrationConfig
}
