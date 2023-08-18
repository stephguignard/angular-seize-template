import { Routes } from '@angular/router';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';

export const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: MoviesComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
];
