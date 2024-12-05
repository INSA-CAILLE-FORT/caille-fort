import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import {QuizzComponent} from '../../Components/quizz/quizz.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    HeaderComponent,
    QuizzComponent,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
