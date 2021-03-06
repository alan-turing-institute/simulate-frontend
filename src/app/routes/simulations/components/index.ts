import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { SimulationsRoutingModule } from '../simulations-routing.module';

import { CaseSummaryListComponent } from './case-summary-list-component';
import { JobSummaryListComponent } from './job-summary-list-component';

import { SimulationComponent } from './simulation.component';
import { ParametersComponent } from './parameters.component';
import { MetricsComponent } from './metrics.component';
import { DownloadsComponent } from './downloads.component';
import { FieldComponent } from './field.component';

export const COMPONENTS = [
  CaseSummaryListComponent,
  JobSummaryListComponent,
  SimulationComponent,
  ParametersComponent,
  MetricsComponent,
  DownloadsComponent,
  FieldComponent,
];

@NgModule({
  imports: [SimulationsRoutingModule, SharedModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
