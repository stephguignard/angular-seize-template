import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example-one-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-example-one-page.component.html',
  styleUrls: ['./signal-example-one-page.component.less'],
})
export class SignalExampleOnePageComponent {
  count = signal<number>(1);

  increaseCount() {
    this.count.update((count) => count + 1);
  }

  decreaseCount() {
    this.count.update((count) => count - 1);
  }
}
