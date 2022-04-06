import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css'],
})
export class NameChildComponent implements OnInit {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = ''; //  we are defining this private variable because we only use it for the getter and setter

  constructor() {}

  ngOnInit(): void {}
}
