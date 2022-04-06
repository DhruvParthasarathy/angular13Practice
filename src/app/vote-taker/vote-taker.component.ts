import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css'],
})
export class VoteTakerComponent implements OnInit {
  constructor() {}

  agreed = 0;
  disagreed = 0;
  voters = ['voter 1', 'voter 2', 'voter 3'];

  onVoted(voted) {
    if (voted) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }

  ngOnInit(): void {}
}
