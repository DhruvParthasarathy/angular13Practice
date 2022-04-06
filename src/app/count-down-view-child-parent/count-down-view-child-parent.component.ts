import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CountDownViewChildTimerComponent } from '../count-down-view-child-timer/count-down-view-child-timer.component';

@Component({
  selector: 'app-count-down-view-child-parent',
  templateUrl: './count-down-view-child-parent.component.html',
  styleUrls: ['./count-down-view-child-parent.component.css'],
})
export class CountDownViewChildParentComponent implements OnInit {
  constructor() {}

  @ViewChild(CountDownViewChildTimerComponent)
  private timerComponent!:CountDownViewChildTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop () { this.timerComponent.stop(); }

  ngOnInit(): void {}
}
