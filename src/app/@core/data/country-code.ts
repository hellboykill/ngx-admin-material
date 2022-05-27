import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

import * as CountryCode from "../../pages/tables/max-ad-units/country-target/country-helper";
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class CountryDataService {
  constructor(private http: HttpClient) {}
  getCountry(): Observable<CountryCode.IOption[]> {
    let items = getCountryData();
    return of(items).pipe(delay(500));
  }
}

function getCountryData() {
  return CountryCode.COUNTRIES;
}
