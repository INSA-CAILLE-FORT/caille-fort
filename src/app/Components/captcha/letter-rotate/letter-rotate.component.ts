import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-letter-rotate',
  standalone: true,
  imports: [],
  templateUrl: './letter-rotate.component.html',
  styleUrl: './letter-rotate.component.scss'
})
export class LetterRotateComponent {
  urlToAsset: string = "../../../../assets/captcha/";
  rotationAngle!: number;
  isTransitionEnabled: boolean = true;
  @Output() rotated = new EventEmitter<boolean>();

  ngOnInit(){
    this.rotationAngle = 0;
    this.urlToAsset = this.urlToAsset + "T.png";
    this.rotateImage(this.getRandomInt(1, 8));
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rotateImage(nbrRotation: number = 1): void {
    if (this.rotationAngle + 45 == 360 && nbrRotation == 1) {
      this.rotationAngle += 45;
      setTimeout(() => {
        this.isTransitionEnabled = false; // Désactive la transition
        this.rotationAngle = 0;
      }, 600);
      
      setTimeout(() => {
        this.isTransitionEnabled = true; // Réactive la transition après un délai
      }, 650); 
    }
    else{
      this.rotationAngle += 45*nbrRotation; // Rotation de 45 degrés à chaque clic
      this.rotationAngle %= 360; // Maintenir l'angle entre 0 et 360
    }

    setTimeout(() => {
      var res = false;
      if(this.rotationAngle == 0)
        res = true;
      this.rotated.emit(res);
    }, 700); 
  }
}
