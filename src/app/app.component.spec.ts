import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBuilder } from 'ng-mocks';
import { AppComponent } from './app.component';
import { TranslateTestingModule } from './test/translate-configuration';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent).keep(RouterTestingModule.withRoutes([])).keep(TranslateTestingModule));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-seize-template'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-seize-template');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-seize-template app is running!');
  });
});
