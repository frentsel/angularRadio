import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpAppService} from '../http-app.service';

@Component({
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})

export class AlbumComponent implements OnInit {

    title: string;
    album: { [key: string]: any; };

    constructor(
        private route: ActivatedRoute,
        private httpAppService: HttpAppService
    ) {}

    scrollToTop() {
        document.getElementsByClassName('content')[0].scroll(0, 0);
    }

    ngOnInit() {

        this.route.params.subscribe((params: Params) => {

            this.title = 'Tracks';
            const {artist} = this.route.snapshot.parent.params;
            const _params = {
                'method': 'album.getinfo',
                'artist': artist,
                'album': params['album'],
                'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
                'lang': 'ru',
                'format': 'json',
            };

            this.httpAppService.getJSON(`http://ws.audioscrobbler.com/2.0/`, _params)
                .then(data => {
                    this.album = data['album'];
                    this.album['content'] = '';
                    if (this.album['wiki'] && this.album['wiki']['content']) {
                        this.album['content'] = this.album['wiki']['content'].replace(/\n+/gm, `<br><br>`);
                    }
                    this.scrollToTop();
                });
        });
    }
}
