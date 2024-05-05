import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, HeaderMenuComponent],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.scss',
})
export class PortfolioWebComponent {}
