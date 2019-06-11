import { Injectable , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject("API_URL") private apiUrl
  ) { }

  getUser() {
    return this.http.post("http://localhost:3001/user/get-user",{})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }

  searchUser(columnName='fname' ,searchValue='') {
    return this.http.post("http://localhost:3001/user/search-user",{columnName ,searchValue})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }

  updateUser(id, fname, lname) {
    return this.http.post(`${this.apiUrl}/user/update-user`,
      { id, fname, lname })
      .toPromise()
      .then(result => result)
      .catch(error => error);
  }

  getPatient(){
    return this.http.post(`${this.apiUrl}/user/get-patient`,{})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }

  searchPatient(columnName='hn' ,searchValue='') {
    return this.http.post(`${this.apiUrl}/user/search-patient`,{columnName ,searchValue})
      .toPromise()
      .then(result => {
        return result;
      })
      .catch(err => err);
  }

}
