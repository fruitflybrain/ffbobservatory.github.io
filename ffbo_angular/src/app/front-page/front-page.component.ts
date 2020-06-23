import { Component, OnInit } from '@angular/core';
import { showCase } from '../../assets/front-page/showcase-tiles';
import { NEUROARCH } from '../../assets/innovations/neuroarch';
import { NEUROKERNEL } from '../../assets/innovations/neurokernel';
import { NEURONLP } from '../../assets/innovations/neuronlp';
import { AssetService } from '../asset.service';

export interface FrontPageCard {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  url?: string;  // url to another website
  link?: string; // routerLink
}

const CARDS: FrontPageCard[] = [
  {
    title: 'BrainMapsViz',
    subtitle: 'Visualizers for various brain maps',
    desc: 'Description to be filled in. Set of Visualizers for BrainMaps',
    img: 'assets/front-page/img/neuronlp.jpg',
    link: '/brainmapsviz'
  },
  {
    title: 'FlyBrainLab',
    subtitle: 'Integrated Development Environment for developing models of the fly brain',
    desc: 'Description to be filled in. Set of Visualizers for BrainMaps',
    img: 'assets/front-page/img/flybrainlab_example.png',
    url: 'https://mkturkcan.github.io/FBLWebNew/'
  }
];

export const OVERVIEWS = [
  {
    // img: 'assets/icons/database.svg',
    img: 'assets/front-page/img/neuroarch.png',
    title: 'Data Integration',
    desc: `
    Graph-based Database NeuroArch incorporates morphology, connectomes,
    model information in a unified framework for easy access.`
  },
  {
    img: 'assets/front-page/img/neurokernel.png',
    // img: 'assets/icons/circuit.svg',
    title: 'Circuit Development & Execution',
    desc: `
    NeuroKernel API with multi-GPU support enables fast circuit development and execution.`
  },
  {
    // img: 'assets/icons/browser.svg',
    img: 'assets/front-page/img/flybrainlab_example.png',
    title: 'Browser GUI',
    desc: `
    Database and execution engine all come with front-end browser-based UIs for
    platform-independent real-time access from anywhere on any device.`
  },
  {
    img: 'assets/icons/share.svg',
    title: 'Fast Collaboration',
    desc: `
    Next generation functional circuit IDE FlyBrainLab is built upon
    JupyterLab and facilitates model sharing using Jupyter Notebooks.`
  }
];

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  overviews = OVERVIEWS;
  showcase = showCase;
  ffboComponents = [NEURONLP, NEUROKERNEL, NEUROARCH];
  cards = CARDS;

  constructor(private asset: AssetService){}

  ngOnInit(): void {
    this.getComponents();
  }

  getComponents() {
    this.asset.getComponents().subscribe(
      data => {
        console.log('Got components', data);
        this.ffboComponents = data;
      },
      error => {
        console.log('Get components error', error);
      }
    );
  }
}
