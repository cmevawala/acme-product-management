import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from "./products.service";


@Component({
    selector: "pm-products",
    templateUrl: "./product-list.component.html",
    styleUrls: ['./product-list-component.css']
})
export class ProductListComponent {
    /* Fields */
    _listFilter: string = '';

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageHeight: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    products: IProduct[] = [];
    filteredProducts: IProduct[] = [];
    errorMessage: string;

    /* Properties */
    get listFilter() {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /* Constructor */
    constructor(private _productService: ProductService) {
    }


    /* Life Cycle */
    ngOnInit() {
        console.log("On Init");
        this._productService.getProducts().subscribe(products => { 
                                            this.products = products;
                                            this.filteredProducts = this.products;
                                        }, error => this.errorMessage = <any>error);
        
    };

    /* Methods */
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