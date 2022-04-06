import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { NameChildComponent } from './name-child/name-child.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { CountDownParentComponent } from './count-down-parent/count-down-parent.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownViewChildParentComponent } from './count-down-view-child-parent/count-down-view-child-parent.component';
import { CountDownViewChildTimerComponent } from './count-down-view-child-timer/count-down-view-child-timer.component';
import { MissioncontrolComponent } from './missioncontrol/missioncontrol.component';
import { AstranautComponent } from './astranaut/astranaut.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'onChanges', component: OnChangesParentComponent },
      { path: 'onChanges/routeTest', component: RouteTestComponent },
      { path: 'voting', component: VoteTakerComponent },
      { path: 'countDown', component: CountDownParentComponent },
      {
        path: 'countDownViewChild',
        component: CountDownViewChildParentComponent,
      },
      {
        path: 'missionControl',
        component: MissioncontrolComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    NameChildComponent,
    OnChangesComponent,
    RouteTestComponent,
    OnChangesParentComponent,
    VoteTakerComponent,
    VoterComponent,
    CountDownParentComponent,
    CountDownTimerComponent,
    CountDownViewChildParentComponent,
    CountDownViewChildTimerComponent,
    MissioncontrolComponent,
    AstranautComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
