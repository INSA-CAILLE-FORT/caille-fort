import { Routes } from '@angular/router';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { MapComponent } from './Pages/map/map.component';
import { GameComponent} from './Pages/game/game.component';
import { PodcastComponent} from './Pages/podcast/podcast.component';
import { AboutComponent} from './Pages/about/about.component';
import { CaptchaComponent } from './Pages/captcha/captcha.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'captcha', component: CaptchaComponent },
  { path: 'about', component: AboutComponent },
];
