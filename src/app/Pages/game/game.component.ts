import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation nécessaire
import { HeaderComponent} from '../../Components/header/header.component';
import { TileComponent } from '../../Components/tile/tile.component';  // Importation nécessaire
import { GameModel } from '../../Models/Game.model';
import { GameService } from '../../Services/GameService.service';
import { QuestionModel } from '../../Models/Question.model';
import { TileModel } from '../../Models/Tile.model';
import { parseGame } from '../../utils/parseGame';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, TileComponent, HeaderComponent],  // Ajouter CommonModule ici
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game: GameModel | null = null; // Variable pour stocker les données du jeu
  error: string = ""; // Variable pour stocker les erreurs
  tiles: TileModel[] = []; // Liste des tiles
  oceanQuizHiden = true;

  constructor(private gameService: GameService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Convertit en nombre
      console.log('ID du jeu :', id);
      this.fetchGameData(id);
    });
  }

  private fetchGameData(id: number): void {
    this.gameService.getGame(id).subscribe({
      next: (data) => {
        this.game = parseGame(data); // Utilisation de parseGame ici
        console.log('Données chargées avec succès :', data);
        this.transformToTiles(); // Transformation en tiles
        console.log('Données transformée avec succès :', this.game);
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des données';
        console.error(err);
      },
    });
  }

  private transformToTiles(): void {
    if (!this.game) return;

    // Tile pour l'Organ
    const organTile = new TileModel(
      this.game.organ.id,
      this.game.organ.name,
      'Organ Information', // Exemple de sous-titre

      this.extractTextByStatus(this.game.organ.questions, 'description'),
      this.extractTextByStatus(this.game.organ.questions, 'benefice'),
      this.extractTextByStatus(this.game.organ.questions, 'consequence'),
      null, // Pas d'image pour le moment

      this.game.organ.questions
    );

    // Tile pour l'OceanPart
    const oceanPartTile = new TileModel(
      this.game.oceanPart.id,
      this.game.oceanPart.name,
      'Ocean Part Information', // Exemple de sous-titre
      // Pas d'image pour le moment
      this.extractTextByStatus(this.game.oceanPart.questions, 'description'),
      this.extractTextByStatus(this.game.oceanPart.questions, 'benefice'),
      this.extractTextByStatus(this.game.oceanPart.questions, 'consequence'),
      null,
      this.game.oceanPart.questions
    );

    // Ajouter les tiles à la liste
    console.log('Tiles :', organTile, oceanPartTile);
    this.tiles = [organTile, oceanPartTile];
  }

  private extractTextByStatus(questions: QuestionModel[], status: string): string {
    // Extraire et concaténer les textes des questions ayant un certain status
    return questions
      .filter((q) => q.status === status)
      .map((q) => q.description)
      .join('; ');
  }

  onHumanQuizFinished($event: boolean) {
    console.log('HERRREEEE');
    this.oceanQuizHiden = false;
  }
}
