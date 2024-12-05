import { Routes } from '@angular/router';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { MapComponent } from './Pages/map/map.component';
// import { GameComponent} from './Pages/game/game.component';
import { PodcastComponent} from './Pages/podcast/podcast.component';
import { AboutComponent} from './Pages/about/about.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'map', component: MapComponent },
  // { path: 'game', component: GameComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'about', component: AboutComponent }
];
