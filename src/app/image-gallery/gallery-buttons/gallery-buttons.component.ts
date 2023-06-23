import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-gallery-buttons',
    template: `
        <div>
            <button (click)="onPreviousClick()">Previous cat</button>
            <button (click)="onNextClick()">Next cat</button>
        </div>
    `,
    styleUrls: ['gallery-buttons.component.scss']
})
export class AppGalleryButtons {

    @Input() currentId: number = 1;

    @Output() handlePreviousCat: EventEmitter<string> = new EventEmitter<string>();
    @Output() handleNextCat: EventEmitter<string> = new EventEmitter<string>();

    onPreviousClick() {
        this.currentId--;
        if (this.currentId < 1) {
            this.currentId = 5;
        }
        this.handlePreviousCat.emit(`${this.currentId}`);
    }

    onNextClick() {
        this.currentId++;
        if (this.currentId > 5) {
            this.currentId = 1;
        }
        this.handleNextCat.emit(`${this.currentId}`);
    }

}