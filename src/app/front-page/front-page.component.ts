import { Component, OnInit } from '@angular/core';
import { showCase } from './../../assets/front-page/showcase-tiles';
import { NEUROARCH } from '../../assets/innovations/neuroarch';
import { NEUROKERNEL } from '../../assets/innovations/neurokernel';
import { NEURONLP } from '../../assets/innovations/neuronlp';


export const OVERVIEWS = [
  {
    img: 'assets/icons/database.svg',
    title: 'Data Integration',
    description: `
    Graph-based Database NeuroArch incorporates morphology, connectomes,
    model information in a unified framework for easy access.`
  },
  {
    img: 'assets/icons/circuit.svg',
    title: 'Circuit Development & Execution',
    description: `
    NeuroKernel API with multi-GPU support enables fast circuit development and execution.`
  },
  {
    img: 'assets/icons/browser.svg',
    title: 'Browser GUI',
    description: `
    Database and execution engine all come with front-end browser-based UIs for
    platform-independent real-time access from anywhere on any device.`
  },
  {
    img: 'assets/icons/share.svg',
    title: 'Fast Collaboration',
    description: `
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

  constructor(){}

  ngOnInit(): void {

  }

}
