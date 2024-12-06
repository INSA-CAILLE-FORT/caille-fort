import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TileComponent} from '../../Components/tile/tile.component';
import {DialogModule} from 'primeng/dialog';
import {CaptchaComponent} from '../captcha/captcha.component';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    NgForOf,
    TileComponent,
    DialogModule,
    CaptchaComponent,
    RouterLink,
  ],

  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {


  onStartClicked() {
    window.location.href = '/captcha';
  }
}
