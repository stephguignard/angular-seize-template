import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-modal-home',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './modal-home.component.html',
  styleUrls: ['./modal-home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalHomeComponent {}
