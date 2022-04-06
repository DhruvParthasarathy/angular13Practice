import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css'],
})
export class OnChangesParentComponent implements OnInit {
  constructor() {}

  major = 1;
  minor = 23;
  ngOnInit(): void {}

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
