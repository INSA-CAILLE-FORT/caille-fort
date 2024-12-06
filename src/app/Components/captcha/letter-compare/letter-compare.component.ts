import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-letter-compare',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './letter-compare.component.html',
  styleUrl: './letter-compare.component.scss'
})
export class LetterCompareComponent {
  private urlToAssetPath: string = "../../../../assets/captcha/";
  urlToImage!: string;
  type!: number;
  @Output() typeChanged = new EventEmitter<number>();

  ngOnInit() {
    this.type = this.getRandomInt(1, 3);
    this.typeChanged.emit(this.type);
    this.urlToImage = this.urlToAssetPath + "A" + this.type + ".png";
    // console.log(this.urlToAsset);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onTypeChanged() {
    // Envoie de la donnée au parent via l'événement
    if(this.type == 3)
      this.type = 1
    else
      this.type++;
    this.urlToImage = this.urlToAssetPath + "A" + this.type + ".png";
    this.typeChanged.emit(this.type);
  }

}
