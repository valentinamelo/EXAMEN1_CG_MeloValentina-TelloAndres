import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [Menubar],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home'
            },
            {
                label: 'Características',
                icon: 'pi pi-star'
            },
            {
                label: 'Proyectos',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Servicios Web',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Servidores',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'Desarrollo de Software',
                        icon: 'pi pi-pencil'
                    },
                ]
            },
            {
                label: 'Contactos',
                icon: 'pi pi-envelope'
            }
        ]
    }
}
