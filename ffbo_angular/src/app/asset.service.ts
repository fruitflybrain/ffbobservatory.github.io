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

  getAnnouncements(): Observable<any> {
    return this.http.get(`${this.baseurl}/announcement/`, {headers: this.httpHeaders});
  }

  getFrontPageVideo(): Observable<any> {
    return this.http.get(`${this.baseurl}/frontpage/video/`, {headers: this.httpHeaders});
  }

  getFrontPageCards(): Observable<any> {
    return this.http.get(`${this.baseurl}/frontpage/cards/`, {headers: this.httpHeaders});
  }

  getGallery(): Observable<any> {
    return this.http.get(`${this.baseurl}/gallery/`, {headers: this.httpHeaders});
  }

  getBrainMaps(): Observable<any> {
    return this.http.get(`${this.baseurl}/brainmaps/`, {headers: this.httpHeaders});
  }
}
