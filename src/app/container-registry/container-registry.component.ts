import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRegistryIntegration } from '../services/container-registry.service';

@Component({
  selector: 'app-container-registry',
  templateUrl: './container-registry.component.html',
  styleUrls: ['./container-registry.component.scss'],
})
export class ContainerRegistryComponent {
  @Input() data: IRegistryIntegration[] = [];
  @Input() loading?: boolean;
  @Output() delete = new EventEmitter<IRegistryIntegration>()
}
