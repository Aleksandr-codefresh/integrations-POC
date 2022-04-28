import { Component, Input } from '@angular/core';
import { IntegrationConfig } from '../integrations-configs/integration-config'

@Component({
  selector: 'app-integration-metadata',
  templateUrl: './integration-metadata.component.html',
  styleUrls: ['./integration-metadata.component.scss']
})
export class IntegrationMetadataComponent {
  @Input() integration?: IntegrationConfig
}
