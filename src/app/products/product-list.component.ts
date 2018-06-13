import { Component } from "@angular/core";

@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
    pageTitle: String = "Product List";
    products: any[] = [
        {
            "productId": 1,
            "productName": "Product 1",
            "productCode": "P1",
            "releaseDate": "22-2-2015",
            "description": "This is product 1",
            "price": 32.99,
            "starRating": 4.2
        },
        {
            "productId": 2,
            "productName": "Product 2",
            "productCode": "P2",
            "releaseDate": "23-2-2015",
            "description": "This is product 2",
            "price": 22.10,
            "starRating": 4.8
        }
    ];
}