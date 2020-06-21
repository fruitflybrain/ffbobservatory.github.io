import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FFBODescription } from '../ffbo-description';
import { NEUROARCH } from '../../assets/innovations/neuroarch';
import { NEUROKERNEL } from '../../assets/innovations/neurokernel';
import { NEURONLP } from '../../assets/innovations/neuronlp';

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
  selector: 'app-innovations',
  templateUrl: './innovations.component.html',
  styleUrls: ['./innovations.component.scss']
})
export class InnovationsComponent implements OnInit {
  innovationsSVG: SafeHtml;
  selected = 'Neurobiologists';
  stakeholders = STAKEHOLDERS;
  ffboComponents: FFBODescription[];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const headers = new HttpHeaders();
    headers.set('Accept', 'image/svg+xml');
    this.http.get('/assets/front-page/img/ffbo_innovation_with_filter.svg',
    {headers, responseType: 'text'}).subscribe(
      data => {
        this.innovationsSVG = this.sanitizer.bypassSecurityTrustHtml(data);
      }
    );
    this.ffboComponents = [NEURONLP, NEUROKERNEL, NEUROARCH];
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
