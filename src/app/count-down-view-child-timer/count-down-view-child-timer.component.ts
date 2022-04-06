import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down-view-child-timer',
  templateUrl: './count-down-view-child-timer.component.html',
  styleUrls: ['./count-down-view-child-timer.component.css'],
})
export class CountDownViewChildTimerComponent implements OnInit {
  constructor() {}

  seconds = 11;
  message = '';
  intervalId = 0;

  ngOnInit(): void {}
  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() {
    clearInterval(this.intervalId);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds == 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}
