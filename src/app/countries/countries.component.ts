import { Component, OnInit } from '@angular/core';
import { HttpAppService } from '../services/http-app.service';
import { Observable } from 'rxjs';

@Component({
  moduleId: module.id,
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Observable<any>;

  constructor(private http: HttpAppService) { }

  ngOnInit() {
    this.countries = this.http.getLabelsByType('country');
  }
}
