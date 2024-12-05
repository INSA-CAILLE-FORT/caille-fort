import { Component } from '@angular/core';
import { TileService } from '../../Services/Tile.service';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  tileService = new TileService();
  tile_organ = this.tileService.getTile();
  tile_ocean = this.tileService.getTile();


  tiles = [
    this.tile_organ,
    this.tile_ocean
  ];

  // handleAnswer(response: string, tile: any) {
  //   console.log(`User answered: ${response} for tile: ${tile.title}`);
  //   // Ajoutez ici la logique pour gérer la réponse de l'utilisateur
  // }
}
