import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntegrationsListComponent } from './integrations-list/integrations-list.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntegrationItemComponent } from './integration-item/integration-item.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { DockerhubIntegrationComponent } from './dockerhub-integration/dockerhub-integration.component';
import { QuayIntegrationComponent } from './quay-integration/quay-integration.component';
import { JiraIntegrationComponent } from './jira-integration/jira-integration.component';
import { ContainerRegistryComponent } from './container-registry/container-registry.component';
import { IntegrationMetadataComponent } from './integration-metadata/integration-metadata.component';
import { IssueTrackingComponent } from './issue-tracking/issue-tracking.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    IntegrationsListComponent,
    IntegrationItemComponent,
    DockerhubIntegrationComponent,
    QuayIntegrationComponent,
    JiraIntegrationComponent,
    ContainerRegistryComponent,
    IntegrationMetadataComponent,
    IssueTrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule,
    NzAvatarModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
