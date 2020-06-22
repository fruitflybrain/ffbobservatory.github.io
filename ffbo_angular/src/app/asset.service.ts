import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  baseurl = 'http://127.0.0.1:4201';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    return this.http.get(`${this.baseurl}/member/`, {headers: this.httpHeaders});
  }

  getComponents(): Observable<any> {
    return this.http.get(`${this.baseurl}/component/`, {headers: this.httpHeaders});
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.baseurl}/post/`, {headers: this.httpHeaders});
  }

  getOnePost(id): Observable<any> {
    return this.http.get(`${this.baseurl}/post/${id}/`, {headers: this.httpHeaders});
  }
}
