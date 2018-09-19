import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../../http-app.service';

@Component({
    moduleId: module.id,
    templateUrl: 'bio.component.html',
    styleUrls: ['bio.component.css']
})

export class BioComponent implements OnInit {

    url = `http://ws.audioscrobbler.com/2.0/`;
    artistName: string;
    artist: any;

    constructor(
        private route: ActivatedRoute,
        private http: HttpAppService
    ) { }

    private scrollToTop() {
        document.getElementsByClassName('content')[0].scroll(0, 0);
    }

    private makeCorrectContent() {

        this.artist.content = '';

        if (this.artist['bio'] && this.artist['bio']['content']) {
            this.artist.content = this.artist['bio']['content'];
            [this.artist.content] = this.artist.content.split('<a href="https://www.last.fm/music/');
            this.artist.content = this.artist.content.trim().replace(/\n+/gm, `<br><br>`);
        }
    }

    ngOnInit() {
        this.route.parent.params.subscribe((params: Params) => {
            this.artistName = params['artist'];
            this.getData();
        });
    }

    async getData() {

        const params = {
            method: 'artist.getinfo',
            artist: this.artistName,
            api_key: '02ec4e9d3a6dec29749f9d0a2cf3f598',
            lang: 'ru',
            format: 'json',
        };
        const { artist } = await this.http.getJSON(this.url, params);

        this.artist = artist;
        this.makeCorrectContent();
        this.scrollToTop();
    }
}
