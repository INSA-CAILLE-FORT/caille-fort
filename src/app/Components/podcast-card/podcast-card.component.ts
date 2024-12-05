import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-podcast-card',
  standalone: true,
  imports: [],
  templateUrl: './podcast-card.component.html',
  styleUrl: './podcast-card.component.scss'
})
export class PodcastCardComponent {
  @Input() podcast: any;
}
