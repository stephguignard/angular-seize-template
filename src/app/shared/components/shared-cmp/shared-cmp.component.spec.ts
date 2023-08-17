import { MockBuilder, MockRender } from 'ng-mocks';

import { SharedCmpComponent } from './shared-cmp.component';

describe('SharedCmpComponent', () => {
  beforeEach(() => MockBuilder(SharedCmpComponent));

  it('should create', () => {
    const fixture = MockRender(SharedCmpComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
