import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-similar',
    templateUrl: './similar.component.html',
    styleUrls: ['./similar.component.scss']
})

export class SimilarComponent implements OnInit {

    @Input() similar: Array<any>;

    constructor() {}

    ngOnInit() {}
}
