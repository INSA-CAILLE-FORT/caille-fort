import {Component, HostListener} from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import {QuizzComponent} from '../../Components/quizz/quizz.component';
import {TileComponent} from '../../Components/tile/tile.component';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    HeaderComponent,
    QuizzComponent,
    TileComponent,
    NgStyle,
    NgForOf,
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  points = [
    { x: 23, y: 48 },
    { x: 33, y: 76 },
    { x: 41, y: 70 },
    { x: 65, y: 85 },
    { x: 61.8, y: 48 },
    { x: 71, y: 43 },
    { x: 83, y: 35 },
  ];

  mapWidth!: number;
  mapHeight!: number;
  topMargin!: string;
  leftMargin!: string;

  readonly aspectRatio: number = 16 / 9; // Ratio fixe du SVG

  constructor() {}

  ngOnInit() {
    this.updateMapDimensions();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateMapDimensions();
  }

  private updateMapDimensions() {
    const container = document.querySelector('.map-container') as HTMLElement;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculer dimensions idéales pour conserver l'aspect ratio
    if (containerWidth / containerHeight > this.aspectRatio) {
      // Trop large : ajuster à la hauteur
      this.mapHeight = containerHeight;
      this.mapWidth = containerHeight * this.aspectRatio;
      this.topMargin = '0';
      this.leftMargin = `${(containerWidth - this.mapWidth) / 2}px`;
    } else {
      // Trop haut : ajuster à la largeur
      this.mapWidth = containerWidth;
      this.mapHeight = containerWidth / this.aspectRatio;
      this.topMargin = `${(containerHeight - this.mapHeight) / 2}px`;
      this.leftMargin = '0';
    }
  }

  getPointStyle(point: { x: number, y: number }) {
    return {
      left: `${(point.x / 100) * this.mapWidth}px`,
      top: `${(point.y / 100) * this.mapHeight}px`
    };
  }
}
