import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockBuilder } from 'ng-mocks';

import { MoviesComponent } from './movies.component';

describe('MoviesComponent', () => {
  beforeEach(() => {
    MockBuilder(MoviesComponent, [TranslateModule, RouterTestingModule]);
  });

  it('should create', () => {
    //const fixture = MockRender(MoviesComponent, {});
    const fixture = TestBed.createComponent(MoviesComponent);
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });
});
