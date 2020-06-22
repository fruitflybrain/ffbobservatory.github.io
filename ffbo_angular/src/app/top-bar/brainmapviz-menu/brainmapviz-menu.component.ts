import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brainmapviz-menu',
  templateUrl: './brainmapviz-menu.component.html',
  styleUrls: ['./brainmapviz-menu.component.scss']
})
export class BrainmapvizMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  launchNLP(organism: string){
    let url: string;
    switch (organism) {
      case 'adult':
        url = 'https://neuronlp.adult.fruitflybrain.org';
        break;
      case 'larva':
        url = 'https://neuronlp.larva.fruitflybrain.org';
        break;
      case 'EM':
        url = 'http://hemibrain.fruitflybrain.org/';
        break;
      default:
        break;
    }
    if (url){
      window.location.href = url;
    }
  }

  launchActivityMap(){
    window.location.href = 'http://amacrine.ee.columbia.edu:15000/';
  }
}
