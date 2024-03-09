import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-product-item',
    templateUrl: './template.html',
    styleUrl: './style.css'
})

export class ProductItemComponent {
    @Input() product!: Product;
    @Output() remover: EventEmitter<String> = new EventEmitter();

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

    share(link: string) {
        const url = `https://t.me/share/url?url=${link}&text=blabla`
        window.open(url, '_blank');
        window.alert('The product has been shared!');
    }

    remove(self: Product) {
        this.remover.emit(self.name);
    }

    like(self: Product) {
        if (self.likes === undefined) {
            self.likes = 0;
        }
        self.likes += 1;
    }

    nextImage(product: Product) {
        if (this.i < product.images.length - 1) {
            this.i += 1;
        } else {
            this.i = 0;
        }
    }

    i: number = 0;

    previousImage(product: Product) {
        if (this.i > 0) {
            this.i -= 1;
        } else {
            this.i = product.images.length - 1;
        }
    }
}

export interface Product {
    name: string;
    //
    images: string[];
    real_link: string;
    //
    price: number;
    description: string;
    rating: number;
    //
    likes?: number;
}

export class Category {
    name: String;
    product_items: Product[];

    constructor(name: String, product_items: Product[]) {
        this.name = name;
        this.product_items = product_items;
    }
}