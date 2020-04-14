import { Component, OnInit } from '@angular/core';
import { FFBODescription } from './ffbo-description';
import { NEUROARCH } from '../../assets/front-page/neuroarch';
import { NEUROKERNEL } from '../../assets/front-page/neurokernel';
import { NEURONLP } from '../../assets/front-page/neuronlp';
import {
  faDatabase,  faWindowRestore, faProjectDiagram, faShare
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  faDatabase  = faDatabase;
  faBrowser  = faWindowRestore;
  faCircuit  = faProjectDiagram;
  faShare  = faShare;

  ffboComponents: FFBODescription[];
  constructor() { }

  ngOnInit(): void {
    this.ffboComponents = [NEURONLP, NEUROKERNEL, NEUROARCH];
  }

}
