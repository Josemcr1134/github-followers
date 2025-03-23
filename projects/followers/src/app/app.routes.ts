import { Routes } from '@angular/router';
import { FollowersListComponent } from './pages/followers/followers-list/followers-list.component';

export const routes: Routes = [
  {
    path: 'followers/:username',
    component: FollowersListComponent,
    data: { ssr: false }
  },
  { path: '**', redirectTo: '' }
];
