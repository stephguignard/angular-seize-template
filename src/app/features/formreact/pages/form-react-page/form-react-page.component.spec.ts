import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockRender } from 'ng-mocks';

import { FormReactPageComponent } from './form-react-page.component';

describe('FormReactPageComponent', () => {
  //let component: FormReactPageComponent;
  //let fixture: ComponentFixture<FormReactPageComponent>;

  // beforeEach(waitForAsync(() => {
  //   // MockBuilder([FormReactPageComponent, RouterModule, RouterTestingModule.withRoutes([]), NG_MOCKS_ROOT_PROVIDERS], []);
  //   MockBuilder([FormReactPageComponent], []).beforeCompileComponents((testBed) => {
  //     testBed.configureTestingModule({
  //       schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //     });
  //   });
  // }));

  beforeEach(() => {
    // MockBuilder(FormReactPageComponent, [RouterTestingModule]).mock(ActivatedRoute, {
    //   routeConfig: { path: '' },
    // });
    // MockBuilder().keep(FormReactPageComponent, {
    //   shallow: true, // all imports of StandaloneComponent will be mocks.
    // });

    TestBed.configureTestingModule({
      imports: [
        // for a single component
        FormReactPageComponent,
        RouterTestingModule,
      ],
      declarations: [
        // our component for testing
        //TargetComponent,
      ],
    });

    //MockBuilder([FormReactPageComponent, RouterTestingModule], []);
    //MockProvider(provideRouter([]));
    // MockBuilder([FormReactPageComponent], []).beforeCompileComponents((testBed) => {
    //   testBed.configureTestingModule({
    //     schemas: [CUSTOM_ELEMENTS_SCHEMA],
    //   });
    // });
    //fixture = TestBed.createComponent(FormReactPageComponent);
    // fixture = MockRender(FormReactPageComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = MockRender(FormReactPageComponent);
    fixture.detectChanges();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
