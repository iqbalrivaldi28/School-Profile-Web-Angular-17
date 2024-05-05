import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-testimoni',
  standalone: true,
  imports: [],
  templateUrl: './testimoni.component.html',
  styleUrl: './testimoni.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimoniComponent {
  @ViewChild('testimonialSwiper') swiper!: ElementRef<SwiperContainer>;

  constructor() {}

  ngOnInit(): void {}
  testimonials = [
    {
      image: 'assets/images/testimonial-1.jpg',
      name: `Naisa Alifia`,
      role: 'Content Creator',
      graduationDate: 2020,
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      image: 'assets/images/testimonial-2.jpg',
      name: `M. Iqbal RIvaldi`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: 'assets/images/testimonial-3.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: 'assets/images/testimonial-4.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      image: 'assets/images/testimonial-5.jpg',
      name: `Alif Razan Saputra`,
      role: 'Programmer',
      graduationDate: 2015,
      testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];
}
