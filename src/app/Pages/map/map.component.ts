/* src/app/Pages/map/map.component.ts */
import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { QuizzComponent } from '../../Components/quizz/quizz.component';
import { TileComponent } from '../../Components/tile/tile.component';
import { NgForOf, NgStyle } from '@angular/common';

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
    { x: 33, y: 75 },
    { x: 41, y: 69 },
    { x: 65, y: 84 },
    { x: 61.8, y: 48 },
    { x: 71, y: 43 },
    { x: 83, y: 35 },
  ];

  mapWidth: number = 0;
  mapHeight: number = 0;
  hoveredPoint: number | null = null;

  constructor() { }

  ngOnInit() {
    this.updateMapDimensions();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateMapDimensions();
  }

  private updateMapDimensions() {
    const mapElement = document.querySelector('.map') as HTMLElement;
    const backgroundImage = new Image();
    backgroundImage.src = '/assets/img/map.svg';
    backgroundImage.onload = () => {
      const imageRatio = backgroundImage.width / backgroundImage.height;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (viewportWidth / imageRatio <= viewportHeight) {
        this.mapWidth = viewportWidth;
        this.mapHeight = viewportWidth / imageRatio;
      } else {
        this.mapHeight = viewportHeight;
        this.mapWidth = viewportHeight * imageRatio;
      }

      mapElement.style.width = `${this.mapWidth}px`;
      mapElement.style.height = `${this.mapHeight}px`;
    };
  }

  getPointStyle(point: { x: number, y: number }) {
    return {
      left: `${(point.x / 100) * this.mapWidth}px`,
      top: `${((point.y / 100) * this.mapHeight)}px`
    };
  }

  onMouseEnter(index: number) {
    this.hoveredPoint = index;
  }

  onMouseLeave() {
    this.hoveredPoint = null;
  }

  getPointImage(index: number) {
    return this.hoveredPoint === index ? 'assets/img/hover_map_button.png' : 'assets/img/green_map_button.png';
  }
}
