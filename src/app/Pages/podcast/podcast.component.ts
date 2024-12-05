import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../Components/header/header.component";
import { PodcastCardComponent } from '../../Components/podcast-card/podcast-card.component';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PodcastCardComponent
  ],
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  podcasts = [
    {
      title: 'Nom de Podcast 1',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    },
    {
      title: 'Nom de Podcast 2',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    },
    {
      title: 'Nom de Podcast 3',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    }
  ];

  currentPodcast: any = null;
  //audio: HTMLAudioElement;
  isPlaying: boolean = false;
  currentTime: number = 0;
  interval: any;


}
