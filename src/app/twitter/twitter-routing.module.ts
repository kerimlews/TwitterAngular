import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: 'app', component: MainComponent,
    children: [
      {path: '', redirectTo: 'tweets', pathMatch: 'full'},
      {path: 'tweets', loadChildren: 'app/twitter/tweets/tweets.module#TweetsModule'},
      {path: 'user-overview', loadChildren: 'app/twitter/user-overview/user-overview.module#UserOverviewModule'},
      {path: 'tweets/:username', loadChildren: 'app/twitter/user-tweets/user-tweets.module#UserTweetsModule'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitterRoutingModule {
}
