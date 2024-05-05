import { Component, ElementRef, HostListener } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { NewsComponent } from 'src/app/components/news/news.component';
import { AchievementComponent } from 'src/app/components/achievement/achievement.component';
import { TestimoniComponent } from 'src/app/components/testimoni/testimoni.component';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-portfolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
    TestimoniComponent,
    FooterComponent,
  ],
  templateUrl: './portfolio-web.component.html',
  styleUrl: './portfolio-web.component.scss',
})
export class PortfolioWebComponent {
  bannerEl: any;
  headerEl: any;
  bannerIsScroll = false;
  aboutSecIsScroll = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.headerEl = this.el.nativeElement.querySelector('#headerId').offsetTop;
    this.bannerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bannerIsScroll = window.scrollY > this.headerEl;
    // this.bannerIsScroll = window.scrollY >
  }
}
