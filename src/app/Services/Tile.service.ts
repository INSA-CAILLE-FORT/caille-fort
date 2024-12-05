import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tile } from '../models/Tile.model';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root',
})
export class TileService {
  // Méthode pour obtenir une Tile
  getTile(): Observable<Tile> {
    // Simulation de données : remplacez cette partie par une requête backend si nécessaire
    const tile = new Tile(
      1,
      "Organ",
      "Point2",
      "blablabla",
      "benef",
      "beurk",
      2,
      null // Ajoutez une instance de Question ici si nécessaire
    );
    return of(tile); // Renvoie un observable pour simuler un appel réseau
  }

  // Méthode pour mettre à jour une Tile
  updateTile(tile: Tile, newScore: number, newQuestion: Question): Observable<Tile> {
    // Mise à jour de l'objet Tile
    tile.updateScore(newScore);
    tile.updateQuestion(newQuestion);

    // Simule une réponse du serveur
    return of(tile);
  }
}
