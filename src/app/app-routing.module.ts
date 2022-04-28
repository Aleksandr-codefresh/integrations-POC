import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerhubIntegrationComponent } from './dockerhub-integration/dockerhub-integration.component';
import { JiraIntegrationComponent } from './jira-integration/jira-integration.component';
import { QuayIntegrationComponent } from './quay-integration/quay-integration.component';

const routes: Routes = [
  {
    path: 'dockerhub',
    component: DockerhubIntegrationComponent,
  },
  {
    path: 'jira',
    component: JiraIntegrationComponent,
  },
  {
    path: 'quay',
    component: QuayIntegrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
