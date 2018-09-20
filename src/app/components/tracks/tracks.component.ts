import { Component, Input, ViewChild } from '@angular/core';
import { HttpAppService } from '../../http-app.service';
import { StationService } from '../../station/station.service';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})

export class TracksComponent {

  @Input() tracks: Array<any>;
  @Input() title: string;

  @ViewChild('video') video: NgxY2PlayerComponent;

  player;
  current = 0;
  btnState = {
    switch: function() {
      this.play = !this.play;
      this.pause = !this.pause;
    },
    play: false,
    pause: true,
  };


  playerOptions: NgxY2PlayerOptions = {
    videoId: '',
    height: 240,
    width: 380,
    playerVars: {
      modestbranding: 1,
      autoplay: 1,
    }
  };

  pause() {
    this.video.videoPlayer.pauseVideo();
  }

  play() {
    this.video.videoPlayer.playVideo();
  }

  go(second) {
    this.video.videoPlayer.seekTo(second, true);
  }

  savePlayer(player) {
    this.player = player;
    this.loadAndPlay(this.tracks[this.current]);
  }

  onStateChange(event) {
    if (event.data === 0) {
      this.next();
    }
  }

  constructor(private httpAppService: HttpAppService,
    private stationService: StationService) {
  }

  prev() {

    if (this.current === 0) {
      return;
    }

    this.current--;
    const track = this.tracks[this.current];
    if (track) {
      this.loadAndPlay(track);
    }
  }

  next() {
    this.current++;
    const track = this.tracks[this.current];
    if (track) {
      this.loadAndPlay(track);
    }
  }

  getTrack(track) {

    const url = `https://www.googleapis.com/youtube/v3/search`;
    const params = {
      'q': `${track.artist.name} - ${track.name}`,
      'part': 'snippet',
      'maxResults': 1,
      'type': 'video',
      'videoCategoryId': 10,
      'key': 'AIzaSyDkpmmvSxy8sfl0eO7eztvgMhy6m93V76s',
      'enablejsapi': 1,
    };

    this.httpAppService.getJSON(url, params)
      .then(data => {
        const videoId = data['items'][0]['id']['videoId'];
        this.video.videoPlayer.loadVideoById(videoId);
      });
  }

  loadAndPlay(track) {
    this.current = this.tracks.indexOf(track);
    this.getTrack(track);
    this.stationService.emitChange('');
  }
}
