import { Routes } from '@angular/router';
import { DynamicFormPageComponent } from './pages/dynamic-form-page/dynamic-form-page.component';
import { FormReactPageComponent } from './pages/form-react-page/form-react-page.component';

export const FORMREACT_ROUTE: Routes = [
  {
    path: '',
    component: FormReactPageComponent,
  },
  {
    path: 'dynamic',
    component: DynamicFormPageComponent,
  },
];
