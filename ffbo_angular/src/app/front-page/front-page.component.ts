import { AssetService } from './../asset.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { showCase } from '../../assets/front-page/showcase-tiles';
import { NEUROARCH } from '../../assets/innovations/neuroarch';
import { NEUROKERNEL } from '../../assets/innovations/neurokernel';
import { NEURONLP } from '../../assets/innovations/neuronlp';

export interface FrontPageCard {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  url?: string;  // url to another website
  link?: string; // routerLink
}

// const CARDS: FrontPageCard[] = [
//   {
//     title: 'BrainMapsViz',
//     subtitle: 'Visualizers for various brain maps',
//     desc: `Description to be filled in. Set of Visualizers for BrainMaps`,
//     img: 'assets/front-page/img/neuronlp.jpg',
//     link: '/brainmapsviz'
//   },
//   {
//     title: 'FlyBrainLab',
//     subtitle: 'Integrated Development Environment for developing models of the fly brain',
//     desc: 'Description to be filled in. Set of Visualizers for BrainMaps',
//     img: 'assets/front-page/img/flybrainlab_example.png',
//     url: 'https://mkturkcan.github.io/FBLWebNew/'
//   }
// ];

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

const STAKEHOLDERS = [
  {
    label: 'Neurobiologists',
    description: 'Short description of innovations targeting Neurobiologists and Neurogeneticists.',
    innovations: [
      {
        title: 'Neuron Classification Algorithms',
        description:  'Classification algorithms for neurons based on morphology and connectivity.'
      },
      {
        title: 'Unique Neuron Identifiers',
        description:  'Each neuron is uniquely identifiable in the database.'
      },
      {
        title: 'Establishing Transgenic Lines',
        description:  `
          Overlay of expression pattern for transgenic lines on neuron morphologies enable identification
          of transgenic lines.
          `
      }
    ]
  },
  {
    label: 'Computational Neuroscientists',
    description: 'Short description of innovations targeting Computationtal/Theoretical Neuroscientists.',
    innovations: [
      {
        title: 'in silico workbench',
        description:  `Complete suites of simulation engines provide <i>in silico</i> workbench for researchers.`
      },
      {
        title: 'Functional Identification of Circuit Motifs',
        description:  'Circuit utility libraries that support analysis and visualization of circuit motifs.'
      },
      {
        title: 'NeuroCAD',
        description:  'CAD-like interactive tools for creating circuit diagrams from biological neural networks.'
      }
    ]
  },
  {
    label: 'Computer Scientists',
    description: 'Short description of innovations targeting Computer Scientists/Engineers.',
    innovations: [
      {
        title: 'Bio-inspired Processing Algorithsm',
        description:  'Computer ScientistsInnovation 1 description'
      },
      {
        title: 'Bio-inspired Learning Algorithsm',
        description:  'Computer ScientistsInnovation 2 description'
      },
      {
        title: 'Deep Learning Platform',
        description:  'Computer ScientistsInnovation 3 description'
      }
    ]
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
  innovationsSVG: SafeHtml;
  selected = 'Neurobiologists';
  stakeholders = STAKEHOLDERS;
  cards: FrontPageCard[];

  constructor(
    private asset: AssetService,
    private http: HttpClient, 
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    this.getComponents();
    this.getCards();
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    this.http.get('/assets/front-page/img/ffbo_innovation_with_filter.svg',
      {headers, responseType: 'text'}).subscribe(
        data => {
          this.innovationsSVG = this.sanitizer.bypassSecurityTrustHtml(data);
        });
  }

  getCards() {
    this.asset.getFrontPageCards().subscribe(
      data => {
        this.cards = data.sort((c1, c2) => {
          return c1.order >= c2.order ? 1: -1;
        });
        console.log('Got cards', this.cards);
      },
      error => {
        console.log('Get cards error', error);
      }
    );
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

  onSelectedTabChange(): void {
    const svg = document.getElementsByClassName('innovations-svg')[0].children[0];
    const rings: HTMLCollection = svg.getElementsByClassName('ring');
    const btnsData: HTMLCollection = svg.getElementsByClassName('btn data');
    let btns: HTMLCollection;
    let btnsTarget: HTMLCollection;
    switch (this.selected) {
      case 'Neurobiologists': // neuroBio
        btns = svg.getElementsByClassName('btn');
        btnsTarget = svg.getElementsByClassName('btn neuroBio');
        break;
      case 'Computational Neuroscientists': // compNeuro
        btns = svg.getElementsByClassName('btn');
        btnsTarget = svg.getElementsByClassName('btn compNeuro');
        break;
      case 'Computer Scientists': // compSci
        btns = svg.getElementsByClassName('btn');
        btnsTarget = svg.getElementsByClassName('btn compSci');
        break;
      default:
        break;
    }

    for (const b of btns as any){
      b.classList.remove('highlight');
    }
    for (const b of btnsTarget as any){
      b.classList.add('highlight');
    }

    for (const r of rings as any){
      r.classList.add('highlight');
    }

    for (const b of btnsData as any){
      b.classList.add('highlight');
    }
  }
}
