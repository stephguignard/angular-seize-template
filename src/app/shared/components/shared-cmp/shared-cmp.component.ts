import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NGXLogger} from "ngx-logger";
import {LoggerTestingModule} from "ngx-logger/testing";

@Component({
  selector: 'app-shared-cmp',
  standalone: true,
  imports: [CommonModule,LoggerTestingModule],
  templateUrl: './shared-cmp.component.html',
  styleUrls: ['./shared-cmp.component.less']
})
export class SharedCmpComponent {
constructor(private logger: NGXLogger) {
  this.logger.debug("test debug");
}
}
