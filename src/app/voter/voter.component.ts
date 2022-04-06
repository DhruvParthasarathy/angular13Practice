import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css'],
})
export class VoterComponent implements OnInit {
  @Input() voterName!: string;
  @Output() voted = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  vote(agreed: boolean) {
    // window.alert(`${this.voterName} has ${agreed ? 'agreed' : 'disagreed'}`);
    this.voted.emit(agreed);
  }
}
