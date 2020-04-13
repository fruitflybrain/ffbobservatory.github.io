import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class FFBONavBarComponent implements OnInit {
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

  launchFBL(){
    window.location.href = 'http://fbl.fruitflybrain.org';
  }

}
