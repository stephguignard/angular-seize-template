import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SHARED } from '../../../../shared';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, SHARED, TranslateModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent {}
