import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent, RouterOutlet], // Importação direta
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet> <!-- Aqui será renderizado o conteúdo das rotas -->
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
