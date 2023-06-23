import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div>{{title}}</div>
        <app-image-gallery [galleryEnabled]="true"></app-image-gallery>
        <app-image-page [pageEnabled]="true">
            <div>Testujemy ng-content</div>
            <p>Czwarteczek</p>
        </app-image-page>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Dzień dobry, mamy czwartek';
}
