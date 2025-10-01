import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-cards',
  imports: [CardModule, ButtonComponent],
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

}
