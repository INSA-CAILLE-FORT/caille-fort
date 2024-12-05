import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tile } from '../models/Tile.model';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root',
})
export class TileService {
    getTile(): Tile {
        // TODO : link to back and remove useless parts
        tile = new Tile(1,"Organ", "Point2", "blablabla", "benef", "beurk", 2, null)
        return tile
    }

    updateTile(tile: Tile, newScore: number, newQuestion: Question){
        this.tile.updateQuestion(newQuestion);
        this.tile.updateScore(newScore)
    }
}