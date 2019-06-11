import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibDepService {

  constructor(    
    private http: HttpClient,
    @Inject("API_URL") private apiUrl) { 
    
  }

  getAllVisit() {
    return this.http.get(`${this.apiUrl}/lib-dep/get-visit-dep`)
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  async getUrgency(){
    try {
      const result = await this.http.get(`${this.apiUrl}/lib-dep/get-urgency`)
        .toPromise();
      return result;
    }
    catch (error) {
      return error;
    }
  }
  insertQueue(data){
    return this.http.post(`${this.apiUrl}/lib-dep/insert-queue`,{data})
    .toPromise()
    .then(result => result)
    .catch(error => error);
  }

}
