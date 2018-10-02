import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  isPlay = false;
  currentTime = null;
  _src = null;

  @Input()
  get src(): string {
    return this._src;
  }
  set src(val: string) {
    this._src = val;
    console.log('val: ', val);
    this.audioSource(val);
  }

  @ViewChild('audio') audio: any;

  play() {
    this.isPlay = true;
    // this.audio.nativeElement.play();
    this.audioSource(this._src);
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

  audioSource(url) {

    const player = new Audio(url);
    const context = new AudioContext();
    const analyser = context.createAnalyser();
    const streamData = new Uint8Array(128);

    context.resume().then(() => {

      let draw = (buffer = null, canvas = null) => {

        const ctx = canvas.getContext("2d");
        const { width, height } = canvas;
        const barWidth = (width / buffer.length) * 2.5;
        let barHeight;
        let x = 0;

        draw = () => {
          x = 0;
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, width, height);

          buffer.forEach((_height) => {
            barHeight = _height * 0.55;
            ctx.fillStyle = '#f05f70';
            ctx.fillRect(x, height - barHeight, barWidth, barHeight);
            x += barWidth + 1;
          });

          requestAnimationFrame(draw);
        }

        draw();
      };

      player.crossOrigin = 'anonymous';
      player.play();

      analyser.fftSize = 256;
      context.createMediaElementSource(player).connect(analyser);
      analyser.connect(context.destination);

      setInterval(() => {
        analyser.getByteFrequencyData(streamData);
      }, 20);

      draw(streamData, document.getElementById('canvas'));
    });
  };
}
