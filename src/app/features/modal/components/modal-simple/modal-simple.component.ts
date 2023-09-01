import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-simple.component.html',
  styleUrls: ['./modal-simple.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalSimpleComponent {
  @Input() isOpen = false;
  @Output() closed: EventEmitter<void> = new EventEmitter();

  close() {
    this.closed.emit();
  }
}
