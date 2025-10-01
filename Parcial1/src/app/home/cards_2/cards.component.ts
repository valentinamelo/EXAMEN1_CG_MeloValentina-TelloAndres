import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from '../button/button.component';
import { Image } from 'primeng/image';

@Component({
  selector: 'app-cards-2',
  imports: [CardModule, ButtonComponent, Image],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent_2 {

}
