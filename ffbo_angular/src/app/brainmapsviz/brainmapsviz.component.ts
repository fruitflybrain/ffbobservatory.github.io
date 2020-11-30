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
}

// const BRAINMAPSVIZ: BrainMapVizCard[] = [
//   {
//     title: '<i>in vivo</i> Antenna Activity Data',
//     subtitle: 'Activity Data',
//     img: '../../assets/brainmapsviz/ffbo_gfx.jpg',
//     url: 'http://amacrine.ee.columbia.edu:15000/',
//     desc: `
//     The Alpha release (v0.1) of the in vivo electrophysiology recordings of the
//     fruit fly antenna. The recordings are used to validate the antenna model published in
//     "A Molecular Odorant Transduction Model and the Complexity of Spatio-Temporal
//     Encoding in the Drosophila Antenna."
//     `
//   },
//   {
//     title: 'FlyCircuit Adult Data',
//     subtitle: 'Morphology & Connectome Data',
//     img: '../../assets/brainmapsviz/flycircuit.png',
//     url: 'https://neuronlp.adult.fruitflybrain.org/',
//     desc: 'Activity Data'
//   },
//   {
//     title: 'L1EM Larval Data',
//     subtitle: 'Morphology & Connectome Data',
//     img: '../../assets/brainmapsviz/larval_l1em.png',
//     url: 'https://neuronlp.larva.fruitflybrain.org/',
//     desc: `
//     Larval Data
//     `
//   },
//   {
//     title: 'Hemibrain Adult Data',
//     subtitle: 'Morphology & Connectome Data',
//     img: '../../assets/brainmapsviz/hemibrain.png',
//     url: 'http://hemibrain.fruitflybrain.org/',
//     desc: `
//     This is the Alpha release (v0.1) of the FFBO NeuroArch Database with
//     Hemibrain v1.0 and VNC, containing ~25,000 neurons and millions of synapses between them.
//     `
//   }
// ];

@Component({
  selector: 'app-brainmapsviz',
  templateUrl: './brainmapsviz.component.html',
  styleUrls: ['./brainmapsviz.component.scss']
})
export class BrainmapsvizComponent implements OnInit {
  vizs: BrainMapVizCard[];
  header = {
    title: 'Brain Maps Visualizers', 
    subtitle: '',
    desc: ''
  };

  sectionHeader = {
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
        this.sectionHeader = data;
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
        this.vizs = data;
      },
      error => {
        console.log('Get BrainMaps Error', error);
      }
    );
  }

}
