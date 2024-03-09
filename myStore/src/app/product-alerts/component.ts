import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../product-item/component";

@Component({
    selector: 'app-product-alerts',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})

export class ProductAlertsComponent {
    @Input() product!: Product;
    @Output() notify = new EventEmitter();
}