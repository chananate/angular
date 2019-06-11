import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibPshService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }

  getVisitDep() {
    return this.http.get(`${this.apiUrl}/lib-psh/get-visit-dep`)
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  getNameDep() {
    return this.http.get(`${this.apiUrl}/lib-psh/get-name-dep`)
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }
}
