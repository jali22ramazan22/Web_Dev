import {Component} from '@angular/core';

import {Category, Product} from "../product-item/component";

import {initial_categories} from "../database";

@Component({
    selector: 'app-product-list',
    templateUrl: './template.html',
    styleUrls: ['./style.css']
})

export class ProductListComponent {
    categories: Category[] = [...initial_categories];
    selectedCategory: Category = new Category("Not selected", []);

    selectCategory(category: Category) {
        this.selectedCategory = category;
    }

    removeByName(name: String) {
        this.selectedCategory.product_items
            =
            this.selectedCategory.product_items.filter(product => product.name !== name);
    }
}