import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  isPlay = true;
  currentTime = null;

  @Input() src = '';

  @ViewChild('audio') audio: any;

  constructor() { }

  play() {
    this.isPlay = true;
    this.audio.nativeElement.play();
  }

  pause() {
    this.isPlay = false;
    this.audio.nativeElement.pause();
  }

  ngOnInit() {
    setInterval(this.timeFormat.bind(this), 100);
  }
  
  timeFormat() {
    const date = new Date(null);
    const seconds = this.audio.nativeElement.currentTime;
    date.setSeconds(seconds);
    this.currentTime = date.toISOString().substr(11, 8);
  }
}
