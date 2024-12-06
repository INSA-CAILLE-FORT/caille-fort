import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-tile-content',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './tile-content.component.html',
  styleUrl: './tile-content.component.scss'
})
export class TileContentComponent {
  @Input() title!: string; // Titre du contenu
  @Input() content!: string; // Contenu textuel
  @Input() contentstyle: 'normal' | 'green' | 'red' = 'normal'; // Style (normal, green ou red)
}
