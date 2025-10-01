import { Component } from '@angular/core';
import { ImageApp_2 } from './image_2/image.component';
import { ImageApp } from './image/image.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonComponent } from './button/button.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CardsComponent } from './cards/cards.component';
import { CardsComponent_2 } from './cards_2/cards.component';
import { CardsComponent_3 } from './cards_3/cards.component';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-home',
  imports: [ ImageApp,
    InputTextComponent,
    ButtonComponent,
    MenubarComponent,
    CardsComponent,
    CardsComponent_2,
    CardsComponent_3,
    AccordionComponent,
    ImageApp_2
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
