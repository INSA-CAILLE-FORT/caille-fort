import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-podcast-card',
  standalone: true,
  imports: [],
  templateUrl: './podcast-card.component.html',
  styleUrl: './podcast-card.component.scss'
})
export class PodcastCardComponent {
  @Input() podcast: any;
  @Output() audioUrlSelected = new EventEmitter<string>();

  handleClick() {
    this.audioUrlSelected.emit(this.podcast.audioUrl);
  }
}
