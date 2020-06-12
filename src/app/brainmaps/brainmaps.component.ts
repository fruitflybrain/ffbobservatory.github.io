import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrainMap } from './brainmaps';
import { ACTIVITY, CONNECTOME, CELLTYPE, SYNAPTOME } from '../../assets/brainmaps/maps';

const BRAINMAPS: BrainMap[] = [ CELLTYPE, CONNECTOME, ACTIVITY, SYNAPTOME ];

function scrollToElement($element: HTMLElement): void {
  console.log($element);
  $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
}

@Component({
  selector: 'app-brainmaps',
  templateUrl: './brainmaps.component.html',
  styleUrls: ['./brainmaps.component.scss']
})
export class BrainmapsComponent implements OnInit {
  brainmaps = BRAINMAPS;
  banner: SafeHtml;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    this.http.get('/assets/brainmaps/img/brainmaps.svg',
    {headers, responseType: 'text'}).subscribe(
      data => {
        this.banner = this.sanitizer.bypassSecurityTrustHtml(data);
      }
    );
  }

}
