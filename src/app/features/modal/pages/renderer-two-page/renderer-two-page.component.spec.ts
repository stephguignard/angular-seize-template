import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererTwoPageComponent } from './renderer-two-page.component';

describe('RendererTwoPageComponent', () => {
  let component: RendererTwoPageComponent;
  let fixture: ComponentFixture<RendererTwoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RendererTwoPageComponent],
    });
    fixture = TestBed.createComponent(RendererTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
