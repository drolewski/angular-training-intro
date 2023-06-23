import {Component, Input} from '@angular/core';
import {ImageService} from '../service/image.service';

@Component({
    selector: 'app-image-gallery',
    template: `
        <app-gallery-buttons (handleNextCat)="handleNextCat($event)"
                             (handlePreviousCat)="handlePreviousCat($event)"></app-gallery-buttons>
        <ng-container *ngIf="galleryEnabled">
            <img alt="cat" src="../../assets/{{imageService.getImage(currentId)}}"/>
        </ng-container>
    `,
    styleUrls: ['./image-gallery.component.scss']
})
export class AppImageGallery {

    @Input() galleryEnabled: boolean = false; // default
    @Input() currentId: number = 1;

    constructor(public imageService: ImageService) {
    }

    handlePreviousCat($event: string) {
        this.currentId = +$event;
    }

    handleNextCat($event: string) {
        this.currentId = +$event;
    }
}