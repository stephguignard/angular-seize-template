import { Routes } from '@angular/router';
import { SignalExampleOnePageComponent } from './pages/signal-example-one-page/signal-example-one-page.component';
import { SignalExempleTwoPageComponent } from './pages/signal-exemple-two-page/signal-exemple-two-page.component';

export const SIGNAL_ROUTE: Routes = [
  {
    path: 'signal-one',
    component: SignalExampleOnePageComponent,
  },
  {
    path: 'signal-two',
    component: SignalExempleTwoPageComponent,
  },
];
