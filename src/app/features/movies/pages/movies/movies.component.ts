import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SHARED} from "../../../../shared";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,SHARED,TranslateModule],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent {

}
