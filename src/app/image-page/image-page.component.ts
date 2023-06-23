import {Component, Input} from '@angular/core';
import {ImageService} from '../service/image.service';

@Component({
    selector: 'app-image-page',
    template: `
        <ng-container *ngIf="pageEnabled">
            <ng-container *ngFor="let image of imageService.getImages(); let i = index">
                <img alt="cat" src="../../assets/{{image}}"/>
            </ng-container>
        </ng-container>
        <ng-content></ng-content>
    `,
    styleUrls: ['./image-page.component.scss']
})
export class AppImagePage {

    @Input() pageEnabled: boolean = false;

    constructor(public imageService: ImageService) {
    }

}