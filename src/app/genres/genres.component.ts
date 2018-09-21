import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../http-app.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Observable<any>;

  constructor(private http: HttpAppService) { }

  ngOnInit() {
    this.genres = this.http.getLabelsByType('genre');
  }
}
