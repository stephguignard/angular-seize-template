import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalRendererComponent } from '../../components/modal-renderer/modal-renderer.component';

@Component({
  selector: 'app-renderer-two-page',
  standalone: true,
  imports: [CommonModule, ModalRendererComponent],
  templateUrl: './renderer-two-page.component.html',
  styleUrls: ['./renderer-two-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RendererTwoPageComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
