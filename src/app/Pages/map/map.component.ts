import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import {QuizzComponent} from '../../Components/quizz/quizz.component';
import {TileComponent} from '../../Components/tile/tile.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    HeaderComponent,
    QuizzComponent,
    TileComponent,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
