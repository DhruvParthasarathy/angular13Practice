import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products'; // here we are imporiting the product struct/interface
// input is used to receive data from a PARENT component

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter(); // emmit an event to the parent component

  constructor() {}

  ngOnInit(): void {}
}
