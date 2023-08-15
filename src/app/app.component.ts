import {Component, OnInit} from '@angular/core';
import {CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {RouterModule, RouterOutlet} from "@angular/router";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,RouterOutlet,RouterModule,TranslateModule],
  providers:[
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-seize-template';
  param = {value: 'world'};

  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');

    translate.use('fr');
  }

}
