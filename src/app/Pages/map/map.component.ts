import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

}
