import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatListModule, MatMenuModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss',
})
export class HeaderMenuComponent {
  @Input() isScrolled: boolean = false;
  @Output() goToDivElement = new EventEmitter<string>();

  gotoDiv(section: string) {
    this.goToDivElement.emit(section);
  }
}
