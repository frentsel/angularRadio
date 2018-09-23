import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../services/http-app.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: Observable<any>;

  constructor(private http: HttpAppService) { }

  ngOnInit() {
    this.cities = this.http.getLabelsByType('city');
  }
}
