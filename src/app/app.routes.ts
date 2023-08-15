import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const APP_ROUTES: Routes = [
  {
    path : '',
    children : [
      {
        path: 'books',
        loadComponent: () => import('./features/books/pages/books/books.component')
          .then(c => c.BooksComponent)
      },
      {
        path: 'movies',
        loadChildren: () => import('./features/movies/movies.routes')
          .then(r => r.MOVIES_ROUTES)

      },
    ]
  }
]
