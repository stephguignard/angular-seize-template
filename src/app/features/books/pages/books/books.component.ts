import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WindowService } from '../../../../core/window/window.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less'],
})
export class BooksComponent {
  constructor(public windows: WindowService) {}

  openUrl() {
    this.windows.getInstance().open('https://www.google.ch');
  }
}
