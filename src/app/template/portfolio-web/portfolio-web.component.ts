import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.scss',
})
export class PortfolioWebComponent {}
