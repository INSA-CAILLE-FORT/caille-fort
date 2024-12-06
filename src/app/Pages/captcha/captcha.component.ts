import { Component, HostListener } from '@angular/core';
import { LetterSnakeComponent } from "../../Components/captcha/letter-snake/letter-snake.component";
import { LetterRotateComponent } from "../../Components/captcha/letter-rotate/letter-rotate.component";
import { MoveKeyBoard } from '../../Models/move-keyBoard.type';
import { LetterCompareComponent } from "../../Components/captcha/letter-compare/letter-compare.component";
import { LetterUnveilComponent } from "../../Components/captcha/letter-unveil/letter-unveil.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [LetterSnakeComponent, LetterRotateComponent, LetterCompareComponent, LetterUnveilComponent],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent {
  keyMove!: MoveKeyBoard;
  private typeCompare1!: number;
  private typeCompare2!: number;
  private unveiled!: boolean;
  private rotated!: boolean;
  private posSnake1!: number;
  private posSnake2!: number;


  constructor(private router: Router) {}

  ngOnInit() {
    this.keyMove = 'NONE';
    this.typeCompare1 = 0;
    this.typeCompare2 = 0;
    this.unveiled = false;
    this.rotated = false;
    this.posSnake1 = 0;
    this.posSnake2 = 0;
  }

  onType1Changed(type: number) {
    this.typeCompare1 = type;
  }

  onType2Changed(type: number) {
    this.typeCompare2 = type;
  }

  onUnveiled(succes: boolean) {
    this.unveiled = succes;
  }

  onRotated(succes: boolean) {
    this.rotated = succes;
  }

  onSnake1Changed(position: number) {
    this.posSnake1 = position;
  }

  onSnake2Changed(position: number) {
    this.posSnake2 = position;
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
      case 'z':
        this.keyMove = 'Z';
        break;
      case 'q':
        this.keyMove = 'Q';
        break;
      case 's':
        this.keyMove = 'S';
        break;
      case 'd':
        this.keyMove = 'D';
        break;
      case 'Z':
        this.keyMove = 'Z';
        break;
      case 'Q':
        this.keyMove = 'Q';
        break;
      case 'S':
        this.keyMove = 'S';
        break;
      case 'D':
        this.keyMove = 'D';
        break;
      default:
        this.keyMove = 'NONE';
    }
  }

  onValidateClick(){
    var isValide = this.captchaValidation();
    if(isValide)
      this.router.navigate(['/']);
  }

  captchaValidation(): boolean {
    var res = true;
    if (this.typeCompare1 != this.typeCompare2)
      res = false;
    console.log(res);
    if (!this.rotated)
      res = false;
    console.log(res);
    if (!this.unveiled)
      res = false;
    console.log(res);
    if (this.posSnake1 != 6)
      res = false;
    console.log(res);
    if (this.posSnake2 != 6)
      res = false;
    console.log(res);
    return res;
  }
}
