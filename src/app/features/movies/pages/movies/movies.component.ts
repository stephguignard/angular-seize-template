import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED} from "../../../../shared";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,SHARED],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent {

}
