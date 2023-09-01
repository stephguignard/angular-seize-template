import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerPageComponent } from './host-listner-page.component';

describe('HostListPageComponent', () => {
  let component: HostListnerPageComponent;
  let fixture: ComponentFixture<HostListnerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HostListnerPageComponent],
    });
    fixture = TestBed.createComponent(HostListnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
