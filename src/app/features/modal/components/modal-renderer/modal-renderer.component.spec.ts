import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { ModalRendererComponent } from './modal-renderer.component';

describe('ModalRendererComponent', () => {
  let component: ModalRendererComponent;
  let fixture: ComponentFixture<ModalRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalRendererComponent, LoggerTestingModule],
    });
    fixture = TestBed.createComponent(ModalRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
