// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-tile',
//   templateUrl: './tile.component.html',
//   styleUrls: ['./tile.component.css']
// })
// export class TileComponent {
//   @Input() title: string;
//   @Input() subtitle: string;
//   @Input() questionText: string;
//   @Input() progress: number;
//   @Output() answerEvent = new EventEmitter<string>();

//   answer(response: string) {
//     this.answerEvent.emit(response);
//   }
// }


import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Tile } from '../../models/Tile.model';

@Component({
  selector: 'app-tile',
  standalone: true,
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile!: Tile;
  @Output() scoreUpdated = new EventEmitter<number>();

  updateScore(newScore: number): void {
    this.tile.updateScore(newScore);
    this.scoreUpdated.emit(this.tile.score);
  }
}
