import { Routes } from '@angular/router';
import { SignalHomePageComponent } from './pages/signal-home-page/signal-home-page.component';

export const SIGNAL_ROUTE: Routes = [
  {
    path: '',
    component: SignalHomePageComponent,
    children: [
      {
        path: 'signal-one',
        loadComponent: () =>
          import('./pages/signal-example-one-page/signal-example-one-page.component').then((c) => c.SignalExampleOnePageComponent),
      },
      {
        path: 'signal-two',
        loadComponent: () =>
          import('./pages/signal-exemple-two-page/signal-exemple-two-page.component').then((c) => c.SignalExempleTwoPageComponent),
      },
    ],
  },
];
