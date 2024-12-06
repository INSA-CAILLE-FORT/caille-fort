import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation nécessaire
import { HeaderComponent} from '../../Components/header/header.component';
import { TileComponent } from '../../Components/tile/tile.component';  // Importation nécessaire
import { TileModel } from '../../Models/Tile.model';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, TileComponent, HeaderComponent],  // Ajouter CommonModule ici
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  tiles: TileModel[] = [
    new TileModel(1, 'Tile 1', 'Subtitle 1', 'Description 1', 'Benefits 1', 'Dysfunctions 1', []),
    new TileModel(2, 'Tile 2', 'Subtitle 2', 'Description 2', 'Benefits 2', 'Dysfunctions 2', []),
  ];
}
