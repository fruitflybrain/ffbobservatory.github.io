import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FFBOComponentDialogComponent } from '../front-page/ffbo-component-dialog/ffbo-component-dialog.component';
import { NEURONLP } from '../../assets/innovations/neuronlp';

/**
 * Scroll to an HTML element
 * @param $element HTMLElement
 */
function scrollToElement($element: HTMLElement): void {
  console.log($element);
  $element.scrollIntoView({
    behavior: 'smooth', block: 'start', inline: 'nearest'
  });
}


@Component({
  selector: 'app-nav-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class FFBONavBarComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getStarted() {
    let structToFuncDiv = document.getElementsByClassName(
        'mat-card front-page-card'
      )[0] as HTMLElement;

    if (!structToFuncDiv) {
      setTimeout(
        () => {
          structToFuncDiv = document.getElementsByClassName(
            'mat-card front-page-card'
          )[0] as HTMLElement;
          scrollToElement(structToFuncDiv);
        }, 500);
    } else {
      scrollToElement(structToFuncDiv);
    }
  }

  showNLPComponentCard(){
    const dialogRef = this.dialog.open(FFBOComponentDialogComponent, {
      width: '80%',
      maxWidth: '1000px',
      data: NEURONLP
    });
  }

  launchFBL(){
    window.location.href = 'http://fbl.fruitflybrain.org';
  }


}
