import { Component, OnInit } from '@angular/core';

export interface BrainMapVizCard {
  title: string;
  subtitle: string;
  img: string | URL;
  url: string | URL;
  desc: string;
}

const BRAINMAPSVIZ: BrainMapVizCard[] = [
  {
    title: '<i>in vivo</i> Antenna Activity Data',
    subtitle: 'Activity Data',
    img: '../../assets/brainmapsviz/ffbo_gfx.jpg',
    url: 'http://amacrine.ee.columbia.edu:15000/',
    desc: `
    The Alpha release (v0.1) of the in vivo electrophysiology recordings of the
    fruit fly antenna. The recordings are used to validate the antenna model published in
    "A Molecular Odorant Transduction Model and the Complexity of Spatio-Temporal
    Encoding in the Drosophila Antenna."
    `
  },
  {
    title: 'FlyCircuit Adult Data',
    subtitle: 'Activity Data',
    img: '../../assets/brainmapsviz/flycircuit.png',
    url: 'https://neuronlp.adult.fruitflybrain.org/',
    desc: 'Activity Data'
  },
  {
    title: 'L1EM Larval Data',
    subtitle: 'Activity Data',
    img: '../../assets/brainmapsviz/larval_l1em.png',
    url: 'https://neuronlp.larva.fruitflybrain.org/',
    desc: 'Activity Data'
  },
  {
    title: 'Hemibrain Adult Data',
    subtitle: 'Activity Data',
    img: '../../assets/brainmapsviz/hemibrain.png',
    url: 'http://hemibrain.fruitflybrain.org/',
    desc: 'Activity Data'
  }
];

@Component({
  selector: 'app-brainmapsviz',
  templateUrl: './brainmapsviz.component.html',
  styleUrls: ['./brainmapsviz.component.scss']
})
export class BrainmapsvizComponent implements OnInit {
  vizs: BrainMapVizCard[] = BRAINMAPSVIZ;

  constructor() { }

  ngOnInit(): void {
  }

}
