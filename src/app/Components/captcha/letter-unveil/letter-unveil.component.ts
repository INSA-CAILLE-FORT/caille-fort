import { Component, Input } from '@angular/core';
import { MoveKeyBoard } from '../../../Models/move-keyBoard.type';

@Component({
  selector: 'app-letter-unveil',
  standalone: true,
  imports: [],
  templateUrl: './letter-unveil.component.html',
  styleUrl: './letter-unveil.component.scss'
})
export class LetterUnveilComponent {
  private urlToAssetPath: string = "../../../../assets/captcha/";
  urlToImage!: string;
  type!: number;
  @Input() set moveKey(move: MoveKeyBoard) {
    if (move != 'SPACE') {
      this.unveil();
    }
  }

  ngOnInit() {
    this.type = 0;
    this.urlToImage = this.urlToAssetPath + "P.png";
    // console.log(this.urlToAsset);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  unveil(){
    var tmp = this.getRandomInt(1, 3);
    //On unveil 1 fois sur 3
    if(tmp == 1 && this.type < 5){
      this.type++;
      this.urlToImage = this.urlToAssetPath + "P" + this.type + ".png";
    }
  }
}
