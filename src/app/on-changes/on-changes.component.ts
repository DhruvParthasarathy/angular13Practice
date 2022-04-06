import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css'],
})
export class OnChangesComponent implements OnInit {
  // This component is used to test the onChanges component lifecycle hook
  constructor() {}

  // Input from parent
  @Input() minor!: number;
  @Input() major!: number;

  // class variables
  changeLog: string[] = [];

  // Component Lifecycle methods
  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} is set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  ngOnInit(): void {}
}
