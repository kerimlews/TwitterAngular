import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOverviewComponent } from './user-overview/user-overview.component';
import { RouterModule } from '@angular/router';
import { UserOverviewService } from '../../services/user-overview/user-overview.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: UserOverviewComponent
      }
    ]),
    CommonModule
  ],
  declarations: [ UserOverviewComponent ],
  providers: [ UserOverviewService ]
})
export class UserOverviewModule { }
