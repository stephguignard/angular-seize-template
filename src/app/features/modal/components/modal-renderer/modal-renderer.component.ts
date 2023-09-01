import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-modal-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-renderer.component.html',
  styleUrls: ['./modal-renderer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalRendererComponent implements AfterViewInit, OnDestroy {
  @Input() isOpen = false;
  @Output() closed: EventEmitter<void> = new EventEmitter();

  @ViewChild('modalRenderer') modalRenderer!: ElementRef;
  // eslint-disable-next-line @typescript-eslint/ban-types
  private globalClickUnlistenFn!: Function;
  private counter = 0;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.globalClickUnlistenFn = this.renderer.listen('document', 'click', (event) => {
      if (this.isOpen && !this.modalRenderer.nativeElement.contains(event.target)) {
        console.log("Clic à l'extérieur du composant détecté!, counter : ", this.counter);
        this.counter++;
        if (this.counter === 2) {
          this.close();
        }
      }
    });
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
