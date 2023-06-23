import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppImageGallery} from './image-gallery/image-gallery.component';
import {AppImagePage} from './image-page/image-page.component';
import {AppGalleryButtons} from './image-gallery/gallery-buttons/gallery-buttons.component';

@NgModule({
    declarations: [
        AppComponent,
        AppImageGallery,
        AppImagePage,
        AppGalleryButtons
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
