import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './Pages/game/game.component';

export const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: 'game', component: GameComponent }
];
