import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { BaseRegistryIntegrations } from '../base-registry-integrations/base-registry-integrations'
import { containeRegistryProvider, ContainerRegistryService, IRegistryIntegration } from '../services/container-registry.service'

@Component({
  selector: 'app-quay-integration',
  templateUrl: './quay-integration.component.html',
  styleUrls: ['./quay-integration.component.scss']
})
export class QuayIntegrationComponent extends BaseRegistryIntegrations implements OnInit {
  constructor(protected containerRegistryService: ContainerRegistryService) {
    super(containerRegistryService, containeRegistryProvider.QUAY);
  }

  ngOnInit(): void {
    this.containerRegistryService
      .fetchQuayIntegrations()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => this.listOfData = data);
  }
}
