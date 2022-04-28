import { Component, OnInit } from '@angular/core';
import {
  containeRegistryProvider,
  ContainerRegistryService,
} from '../services/container-registry.service';
import { finalize } from 'rxjs/operators';
import { BaseRegistryIntegrations } from '../base-registry-integrations/base-registry-integrations';

@Component({
  selector: 'app-dockerhub-integration',
  templateUrl: './dockerhub-integration.component.html',
  styleUrls: ['./dockerhub-integration.component.scss'],
})
export class DockerhubIntegrationComponent
  extends BaseRegistryIntegrations
  implements OnInit
{
  constructor(protected containerRegistryService: ContainerRegistryService) {
    super(containerRegistryService, containeRegistryProvider.DOCKERHUB);
  }

  ngOnInit(): void {
    this.containerRegistryService
      .fetchDockerHubIntegrations()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((data) => (this.listOfData = data));
  }
}
