import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'artist.component.html',
    styleUrls: ['artist.component.css']
})

export class ArtistComponent implements OnInit {

    artist: string;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.artist = params['artist'];
        });

    }
}
