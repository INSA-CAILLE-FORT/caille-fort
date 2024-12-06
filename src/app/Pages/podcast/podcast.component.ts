import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../Components/header/header.component";
import { PodcastCardComponent } from '../../Components/podcast-card/podcast-card.component';

@Component({
  selector: 'app-podcast',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PodcastCardComponent,
  ],
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent {
  maxTime = 100;
  podcasts = [
    {
      title: 'PODCAST-AUDIO-Florian-Sévellec',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png',
      audioUrl: 'assets/audio/PODCAST-AUDIO-Florian-Sévellec.mp3'
    },
    {
      title: 'PODCAST-AUDIO-Frédéric-Le-Moigne',
      date: '05/12/2024',
      imageUrl: 'assets/img/podcast_exemple.png',
      audioUrl: 'assets/audio/PODCAST-AUDIO-Frédéric-Le-Moigne.mp3'
    },
    {
      title: 'PODCAST-AUDIO INSA-CAILLE-FORT',
      date: '06/12/2024',
      imageUrl: 'assets/img/nice_photo_of_us.jpg',
      audioUrl: 'assets/audio/PODCAST-AUDIO INSA-CAILLE-FORT.mp3'
    },
  ];

  currentPodcast: any = null;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('podcastCards') podcastCards!: ElementRef;
  isPlaying: boolean = false;
  currentTime: number = 0;
  interval: any;
  scrollAmount = 200; // Ajustez cette valeur selon vos besoins

  ngAfterViewInit() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.addEventListener('timeupdate', this.updateTime.bind(this));
      this.audioPlayer.nativeElement.addEventListener('ended', this.onEnded.bind(this));
    }
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      if (this.audioPlayer?.nativeElement?.pause) {
        this.audioPlayer.nativeElement.pause();
      } else {
        console.warn('Audio player is not initialized or not a valid audio element.');
      }
    }
  }

  playPodcast(podcast: any) {
    this.currentPodcast = podcast;
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.src = podcast.audioUrl;
      this.audioPlayer.nativeElement.play();
      this.isPlaying = true;
      this.updateProgress();
    }
  }

  togglePlay() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      if (this.isPlaying) {
        if (this.audioPlayer?.nativeElement?.pause) {
          this.audioPlayer.nativeElement.pause();
        } else {
          console.warn('Audio player is not initialized or not a valid audio element.');
        }
      } else {
        this.audioPlayer.nativeElement.play();
      }
      this.isPlaying = !this.isPlaying;
      this.updateProgress();
    }
  }

  updateTime() {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.currentTime = this.audioPlayer.nativeElement.currentTime;
    }
  }

  seek(event: any) {
    if (this.audioPlayer && this.audioPlayer.nativeElement) {
      this.audioPlayer.nativeElement.currentTime = event.target.value;
    }
  }

  updateProgress() {
    if (this.isPlaying) {
      this.interval = setInterval(() => {
        if (this.audioPlayer && this.audioPlayer.nativeElement) {
          this.currentTime = this.audioPlayer.nativeElement.currentTime;
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  }

  onEnded() {
    this.isPlaying = false;
    clearInterval(this.interval);
  }

  onAudioUrlSelected(audioUrl: string) {
    const selectedPodcast = this.podcasts.find(p => p.audioUrl === audioUrl);

    if (selectedPodcast) {
      this.playPodcast(selectedPodcast); // Joue directement le podcast
    } else {
      console.error('Podcast not found for audio URL:', audioUrl);
    }
  }


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
