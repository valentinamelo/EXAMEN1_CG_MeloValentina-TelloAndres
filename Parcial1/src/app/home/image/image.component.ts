import { Component } from '@angular/core';
import { Image } from 'primeng/image';

@Component({
    selector: 'image-app',
    templateUrl: './image.component.html',
    standalone: true,
    imports: [Image]
})
export class ImageApp {
}