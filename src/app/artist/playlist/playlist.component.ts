import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {HttpAppService} from '../../http-app.service';

@Component({
    moduleId: module.id,
    templateUrl: 'playlist.component.html',
    styleUrls: ['playlist.component.css']
})

export class PlaylistComponent implements OnInit {

    tracks: Array<any>;
    title: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private httpAppService: HttpAppService,
    ) {}

    ngOnInit() {

        const _params = {
            'method': 'artist.getTopTracks',
            'autocorrect': 1,
            'artist': this.activatedRoute.snapshot.parent.params['artist'],
            'api_key': '02ec4e9d3a6dec29749f9d0a2cf3f598',
            'page': 1,
            'limit': 50,
            'format': 'json',
        };

        this.httpAppService.getJSON(`http://ws.audioscrobbler.com/2.0/`, _params)
            .then(data => {
                this.tracks = data.toptracks.track;
                this.title = 'Top 50 tracks';
            });
    }
}
