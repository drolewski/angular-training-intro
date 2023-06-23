import {Injectable} from '@angular/core';

@Injectable({providedIn: "root"})
export class ImageService {

    getImages(): string[] {
        const cats = [];
        for (let i = 1; i < 6; i++) {
            cats.push(`cat${i}.jpg`);
        }
        return cats;
    }

    getImage(id: number): string {
        return `cat${id}.jpg`;
    }

}
