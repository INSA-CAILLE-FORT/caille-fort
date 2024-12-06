import { Component, Input } from '@angular/core';
import {TileModel} from '../../Models/Tile.model';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { NgForOf, NgIf } from '@angular/common';
import {QuizzComponent} from '../quizz/quizz.component';
import {QuestionModel} from '../../Models/Question.model';
import {TileContentComponent} from '../tile-content/tile-content.component';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CardModule, AccordionModule, NgForOf, NgIf, QuizzComponent, TileContentComponent],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() tile!: TileModel;
}

