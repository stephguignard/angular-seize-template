import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCmpComponent } from './shared-cmp.component';

describe('SharedCmpComponent', () => {
  let component: SharedCmpComponent;
  let fixture: ComponentFixture<SharedCmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedCmpComponent]
    });
    fixture = TestBed.createComponent(SharedCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
