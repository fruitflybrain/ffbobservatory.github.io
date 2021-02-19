import { AssetService } from './../asset.service';
import { GalleryComponent } from './gallery/gallery.component';
import { Component, OnInit } from '@angular/core';

export interface BrainMapVizCard {
  title: string;
  subtitle: string;
  img: string | URL;
  url: string | URL;
  info_url?: string | URL;
  desc: string;
  category: string;
}

@Component({
  selector: 'app-brainmapsviz',
  templateUrl: './brainmapsviz.component.html',
  styleUrls: ['./brainmapsviz.component.scss']
})
export class BrainmapsvizComponent implements OnInit {
  vizs: {[name: string]: BrainMapVizCard[]} = {connectome:[], gene: [], activity: []};
  backgroundImg = 'assets/brainmapsviz/neuronlp_ui.jpg';
  header = {
    title: 'Brain Maps Visualizers',
    subtitle: '',
    desc: ''
  };

  sectionHeader1 = {
    title: 'Brain Maps Gallery',
    subtitle: '',
    desc: ''
  };

  sectionHeader2 = {
    title: 'Brain Maps Datasets',
    subtitle: '',
    desc: ''
  };

  constructor(private asset: AssetService) {
    this.asset.getOnePageHeader(1).subscribe(
      data => {
        console.log('Got BrainMaps Header', data);
        this.header = data;
      },
      error => {
        console.log('Get BrainMaps Header Error', error);
      }
    );

    this.asset.getOnePageHeader(2).subscribe(
      data => {
        console.log('Got BrainMaps Section Header', data);
        this.sectionHeader2 = data;
      },
      error => {
        console.log('Get BrainMaps Section Header Error', error);
      }
    );


    this.asset.getOnePageHeader(3).subscribe(
      data => {
        console.log('Got BrainMaps Section Header', data);
        this.sectionHeader1 = data;
      },
      error => {
        console.log('Get BrainMaps Section Header Error', error);
      }
    );
  }

  ngOnInit(): void {
    this.asset.getBrainMaps().subscribe(
      data => {
        console.log('Got BrainMaps', data);
        for (const v of data){
          if (v.category in this.vizs) {
            this.vizs[v.category].push(v);
          }
        }
      },
      error => {
        console.log('Get BrainMaps Error', error);
      }
    );
  }

}
