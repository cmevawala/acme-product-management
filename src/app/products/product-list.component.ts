import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list-component.css']
})
export class ProductListComponent {
    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageHeight: number = 50;
    imageMargin: number = 2;
    _listFilter: string = '';
    showImage: boolean = false;
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Product 1",
            "productCode": "P1-10001",
            "releaseDate": "22-2-2015",
            "description": "This is product 1",
            "price": 32.99,
            "starRating": 3,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtEMMV0__-FFXNQMqFDyK6fu-xdxa_3vwOYm_6jczRP-dILOoJzQ",
        },
        {
            "productId": 2,
            "productName": "Product 2",
            "productCode": "P2-10002",
            "releaseDate": "23-2-2015",
            "description": "This is product 2",
            "price": 22.10,
            "starRating": 2,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjWb2_EX-iZcleBjLtiFslLrVNhXcWY7NcG5CjKdOZFqQZT-GHsQ",
        }
    ];

    filteredProducts: IProduct[] = [];

    get listFilter() {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }


    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'product';
    }

    ngOnInit() {
        console.log("On Init");
    };

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase()
        return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
    };

    toggleImage() : void {
        this.showImage = !this.showImage;
    };

    onRatingClicked(message: string): void {
        alert(message);
    }
}