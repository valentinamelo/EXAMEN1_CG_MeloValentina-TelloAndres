import { Component } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { ImageApp } from '../home/image/image.component';
import { InputTextComponent } from '../home/input-text/input-text.component';
import { ButtonComponent } from '../home/button/button.component';
import { MenubarComponent } from '../home/menubar/menubar.component';

@Component({
  selector: 'app-details',
  imports: [ToastComponent,
    ImageApp,
    InputTextComponent,
    ButtonComponent,
    MenubarComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
