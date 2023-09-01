import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'books',
        loadComponent: () => import('./features/books/pages/books/books.component').then((c) => c.BooksComponent),
      },
      {
        path: 'movies',
        loadChildren: () => import('./features/movies/movies.routes').then((r) => r.MOVIES_ROUTES),
      },
      {
        path: 'formreact',
        loadChildren: () => import('./features/formreact/formreact.routes').then((r) => r.FORMREACT_ROUTE),
      },
      {
        path: 'formtempl',
        loadComponent: () =>
          import('./features/formtempl/pages/form-template-page/form-template-page.component').then((c) => c.FormTemplatePageComponent),
      },
      {
        path: 'signal',
        loadChildren: () => import('./features/signal/signal.routes').then((r) => r.SIGNAL_ROUTE),
      },
      {
        path: 'modal',
        loadChildren: () => import('./features/modal/modal.routes').then((r) => r.MODAL_ROUTE),
      },
    ],
  },
];
