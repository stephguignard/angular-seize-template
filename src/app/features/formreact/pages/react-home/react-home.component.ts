import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-react-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './react-home.component.html',
  styleUrls: ['./react-home.component.less'],
})
export class ReactHomeComponent {}
