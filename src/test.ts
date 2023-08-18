// All methods in mock declarations and providers
import { ngMocks } from 'ng-mocks';
// will be automatically spied on their creation.
// https://ng-mocks.sudo.eu/extra/auto-spy

ngMocks.autoSpy('jasmine'); // or jest

// ngMocks.defaultMock helps to customize mocks
// globally. Therefore, we can avoid copy-pasting
// among tests.
// https://ng-mocks.sudo.eu/api/ngMocks/defaultMock
// ngMocks.defaultMock(AuthService, () => ({
//   isLoggedIn$: EMPTY,
//   currentUser$: EMPTY,
// }));
