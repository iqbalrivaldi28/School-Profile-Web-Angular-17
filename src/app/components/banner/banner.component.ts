import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent {
  listBanner = [
    'assets/images/bg-1.jpg',
    'assets/images/bg-2.jpg',
    'assets/images/bg-3.jpg',
    'assets/images/bg-4.jpg',
  ];

  ngOnInit(): void {}
}
