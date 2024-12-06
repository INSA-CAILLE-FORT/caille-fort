import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TileComponent} from '../../Components/tile/tile.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NgForOf,
    TileComponent
  ],

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  onStartClicked() {
    window.location.href = '/map';
  }
}
