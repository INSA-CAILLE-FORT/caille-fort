import { Component } from '@angular/core';
import { TileService } from '../../Services/Tile.service';
import { TileComponent } from '../../Components/tile/tile.component';
import {NgForOf} from '@angular/common';
import {Tile} from '../../Models/Tile.model';
import {Question} from '../../Models/Question.model';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    TileComponent,
    NgForOf,
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  tile!: Tile;

  constructor(private tileService: TileService) {}

  ngOnInit(): void {
    this.tileService.getTile().subscribe((data) => {
      this.tile = data;
    });
  }

  updateTile(): void {
    const newQuestion = new Question(1, 'What is the capital of France?', 'open', ['Paris', 'London', 'Berlin', 'Madrid']);
    this.tileService.updateTile(this.tile, 5, newQuestion).subscribe((updatedTile) => {
      this.tile = updatedTile;
    });
  }
}
