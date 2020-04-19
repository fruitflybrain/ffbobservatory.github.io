import { Component, OnInit } from '@angular/core';
import { showCase } from './../../assets/front-page/showcase-tiles';

export const OVERVIEWS = [
  {
    img: 'assets/icons/database.svg',
    title: 'Data Integration',
    description: ['Graph-based Database NeuroArch incorporates morphology, connectomes,',
                  'model information in a unified framework for easy access.'].join('')
  },
  {
    img: 'assets/icons/circuit.svg',
    title: 'Circuit Development & Execution',
    description: 'NeuroKernel API with multi-GPU support enables fast circuit development and execution'
  },
  {
    img: 'assets/icons/browser.svg',
    title: 'Browser GUI',
    description: ['Database and execution engine all come with front-end browser-based UIs for',
                  'platform-independent real-time access from anywhere on any device.'].join('')
  },
  {
    img: 'assets/icons/share.svg',
    title: 'Fast Collaboration',
    description: ['Next generation functional circuit IDE FlyBrainLab is built upon',
                  'JupyterLab and facilitates model sharing using Jupyter Notebooks.'].join('')
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
  constructor(){}

  ngOnInit(): void {

  }

}
