import { Component } from '@angular/core';
import { ImageApp } from './image/image.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonComponent } from './button/button.component';
import { MenubarComponent } from './menubar/menubar.component';
import { CardsComponent } from './cards/cards.component';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-home',
  imports: [ ImageApp,
    InputTextComponent,
    ButtonComponent,
    MenubarComponent,
    CardsComponent,
    AccordionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
