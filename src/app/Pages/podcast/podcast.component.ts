import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../Components/header/header.component";
import { PodcastCardComponent } from '../../Components/podcast-card/podcast-card.component';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PodcastCardComponent,
    Button
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
    },
    {
      title: 'Nom de Podcast 4',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    },
    {
      title: 'Nom de Podcast 5',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    },
    {
      title: 'Nom de Podcast 6',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png'
    }
  ];

  currentPodcast: any = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @ViewChild('podcastCards') podcastCards!: ElementRef;
  isPlaying: boolean = false;
  currentTime: number = 0;
  interval: any;
  scrollAmount = 200; // Ajustez cette valeur selon vos besoins
  scrollLeft() {
    if (this.podcastCards && this.podcastCards.nativeElement) {
      this.podcastCards.nativeElement.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.podcastCards && this.podcastCards.nativeElement) {
      this.podcastCards.nativeElement.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }
}
