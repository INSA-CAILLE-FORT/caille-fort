import { Component, HostListener } from '@angular/core';
import { LetterSnakeComponent } from "../../Components/captcha/letter-snake/letter-snake.component";
import { LetterRotateComponent } from "../../Components/captcha/letter-rotate/letter-rotate.component";
import { MoveKeyBoard } from '../../Models/move-keyBoard.type';
import { LetterCompareComponent } from "../../Components/captcha/letter-compare/letter-compare.component";

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [LetterSnakeComponent, LetterRotateComponent, LetterCompareComponent],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent {
  keyMove!: MoveKeyBoard;
  private typeCompare1!: number;
  private typeCompare2!: number;

  ngOnInit(){
    this.keyMove = 'NONE';
    this.typeCompare1 = 0;
    this.typeCompare2 = 0;
  }

  onType1Changed(type: number) {
    this.typeCompare1 = type;
  }

  onType2Changed(type: number) {
    this.typeCompare2 = type;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    // this.keyMove = 'NONE';
    setTimeout(() => {
      this.keyMove = 'NONE';
    }, 50); 
    switch (event.key) {
      case 'ArrowUp':
        this.keyMove = 'UP';
        break;
      case 'ArrowDown':
        this.keyMove = 'DOWN';
        break;
      case 'ArrowLeft':
        this.keyMove = 'LEFT';
        break;
      case 'ArrowRight':
        this.keyMove = 'RIGHT';
        break;
      case ' ':
        this.keyMove = 'SPACE';
        break;
      default:
        this.keyMove = 'NONE';
    }
  }
}
