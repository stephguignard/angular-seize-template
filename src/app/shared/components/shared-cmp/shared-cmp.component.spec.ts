import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCmpComponent } from './shared-cmp.component';
import {MockBuilder, MockRender} from "ng-mocks";

describe('SharedCmpComponent', () => {

  beforeEach(() => MockBuilder(SharedCmpComponent));

  it('should create', () => {
    const fixture = MockRender(SharedCmpComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
