import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { HeaderComponent} from '../../Components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeaderComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  isFirstPhotoDisplayed = true;

  displayFirstPhoto() {
    this.isFirstPhotoDisplayed = true;
  }

  displaySecondPhoto() {
    this.isFirstPhotoDisplayed = false;
  }
}
