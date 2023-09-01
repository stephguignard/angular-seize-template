import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalSimpleComponent } from '../../components/modal-simple/modal-simple.component';

@Component({
  selector: 'app-host-list-page',
  standalone: true,
  imports: [CommonModule, ModalSimpleComponent],
  templateUrl: './host-listner-page.component.html',
  styleUrls: ['./host-listner-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostListnerPageComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
