import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {

  constructor(private http: HttpClient) { }

  getTeams(){
    return this.http.get('https://acme-sport-php.herokuapp.com/');
  }
}
