import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true, // Mantém o componente standalone
  imports: [MatToolbarModule], // Importa MatToolbarModule diretamente no componente
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
