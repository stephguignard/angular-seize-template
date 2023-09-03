import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { LoggerModule, NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-modal-renderer',
  standalone: true,
  imports: [CommonModule, LoggerModule],
  templateUrl: './modal-renderer.component.html',
  styleUrls: ['./modal-renderer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalRendererComponent implements OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Output() closed: EventEmitter<void> = new EventEmitter();

  @ViewChild('modalRenderer') modalRenderer!: ElementRef;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private globalClickUnlistenFn!: Function;
  private counter = 0;
  constructor(
    private renderer: Renderer2,
    private logger: NGXLogger
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && !changes['isOpen'].isFirstChange()) {
      if (this.isOpen) {
        this.globalClickUnlistenFn = this.renderer.listen('document', 'click', (event) => {
          this.logger.debug('click document event : ', this.counter);
          if (this.isOpen && !this.modalRenderer.nativeElement.contains(event.target)) {
            this.counter++;
            if (this.counter === 2) {
              this.close();
            }
            this.logger.debug("Clic à l'extérieur du composant détecté!, counter : ", this.counter);
          }
        });
      } else {
        if (this.globalClickUnlistenFn) {
          this.logger.debug('unsubscribe click event');
          this.globalClickUnlistenFn();
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (this.globalClickUnlistenFn) {
      this.globalClickUnlistenFn();
    }
  }

  close() {
    this.closed.emit();
    this.counter = 0;
  }
}
