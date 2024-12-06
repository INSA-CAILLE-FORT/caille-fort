import { Component, Input } from '@angular/core';
import { MoveKeyBoard } from '../../../Models/move-keyBoard.type';

@Component({
  selector: 'app-letter-snake',
  standalone: true,
  imports: [],
  templateUrl: './letter-snake.component.html',
  styleUrl: './letter-snake.component.scss'
})
export class LetterSnakeComponent {
  private urlToAssetPath: string = "../../../../assets/captcha/";
  urlToImage!: string;
  position!: number;
  @Input() set moveKey(move: MoveKeyBoard) {
    if (move != 'NONE') {
      this.moveSnake(move);
    }
  }

  ngOnInit() {
    this.position = this.getRandomInt(1, 6);
    this.urlToImage = this.urlToAssetPath + "C" + this.position + ".png";
    // console.log(this.urlToAsset);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  moveSnake(move: MoveKeyBoard) {
    switch (move) {
      case 'UP':
        if(this.position == 3 || this.position == 4 || this.position == 5){
          this.position -= 1;
        }
        break;
      case 'DOWN':
        if(this.position == 2 || this.position == 3 || this.position == 4){
          this.position += 1;
        }
        break;
      case 'LEFT':
        if(this.position == 1){
          this.position += 1;
        }
        else if(this.position == 6){
          this.position -= 1;
        }
        break;
      case 'RIGHT':
        if(this.position == 2){
          this.position -= 1;
        }
        else if(this.position == 5){
          this.position += 1;
        }
        else if(this.position == 6){
          this.position = 1;
        }
        break;
    }
    this.urlToImage = this.urlToAssetPath + "C" + this.position + ".png";
  }
}
