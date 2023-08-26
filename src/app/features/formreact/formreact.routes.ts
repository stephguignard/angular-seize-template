import { Routes } from '@angular/router';
import { DynamicFormPageComponent } from './pages/dynamic-form-page/dynamic-form-page.component';
import { FormReactPageComponent } from './pages/form-react-page/form-react-page.component';
import { ReactHomeComponent } from './pages/react-home/react-home.component';

export const FORMREACT_ROUTE: Routes = [
  {
    path: '',
    component: ReactHomeComponent,
    children: [
      {
        path: 'simple',
        component: FormReactPageComponent,
      },
      {
        path: 'dynamic',
        component: DynamicFormPageComponent,
      },
    ],
  },
];
