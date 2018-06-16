
import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    "selector": "pm-star",
    "templateUrl": "./star.component.html",
    "styleUrls": ["./star.component.css"]
})
export class StarComponent implements OnChanges {
    
    @Input() rating: number = 0;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    width: number;

    ngOnChanges(): void {
        this.width = this.rating * 70 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit("Rating Clicked")
    }
}