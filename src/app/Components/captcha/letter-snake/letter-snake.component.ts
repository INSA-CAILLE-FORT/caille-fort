import { Component } from '@angular/core';

@Component({
  selector: 'app-letter-snake',
  standalone: true,
  imports: [],
  templateUrl: './letter-snake.component.html',
  styleUrl: './letter-snake.component.scss'
})
export class LetterSnakeComponent {
  urlToAsset: string = "../../../../assets/captcha/";
  position!: number;

  ngOnInit(){
    this.position = this.getRandomInt(1, 6);
    this.urlToAsset = this.urlToAsset + "C" + this.position + ".png";
    // console.log(this.urlToAsset);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
