import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FFBODescription } from './../front-page/ffbo-description';
import { NEUROARCH } from '../../assets/innovations/neuroarch';
import { NEUROKERNEL } from '../../assets/innovations/neurokernel';
import { NEURONLP } from '../../assets/innovations/neuronlp';

const STAKEHOLDERS = [
  {
    label: 'Neurobiologists',
    description: 'Short description of innovations targeting Neurobiologists and Neurogeneticists.',
    innovations: [
      {
        title: 'Innovation 1',
        description:  'Neurobiologists Innovation 1 description'
      },
      {
        title: 'Innovation 2',
        description:  'Neurobiologists Innovation 2 description'
      },
      {
        title: 'Innovation 3',
        description:  'Neurobiologists Innovation 3 description'
      }
    ]
  },
  {
    label: 'Computational Neuroscientists',
    description: 'Short description of innovations targeting Computationtal/Theoretical Neuroscientists.',
    innovations: [
      {
        title: 'Innovation 1',
        description:  'Computational Neuroscientists Innovation 1 description'
      },
      {
        title: 'Innovation 2',
        description:  'Computational Neuroscientists Innovation 2 description'
      },
      {
        title: 'Innovation 3',
        description:  'Computational Neuroscientists Innovation 3 description'
      }
    ]
  },
  {
    label: 'Computer Scientists',
    description: 'Short description of innovations targeting Computer Scientists/Engineers.',
    innovations: [
      {
        title: 'Innovation 1',
        description:  'Computer ScientistsInnovation 1 description'
      },
      {
        title: 'Innovation 2',
        description:  'Computer ScientistsInnovation 2 description'
      },
      {
        title: 'Innovation 3',
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
