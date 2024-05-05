import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.scss',
})
export class PortfolioWebComponent {}
