import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signal-home-page',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterOutlet, RouterModule],
  templateUrl: './signal-home-page.component.html',
  styleUrls: ['./signal-home-page.component.less'],
})
export class SignalHomePageComponent {}
