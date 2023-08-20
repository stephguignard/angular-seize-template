import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  beforeEach(() => {
    MockBuilder([MoviesComponent]);
  });

  it('should create', () => {
    //const fixture = MockRender(MoviesComponent, {});
    const fixture = TestBed.createComponent(MoviesComponent);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
