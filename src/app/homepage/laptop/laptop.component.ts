import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit, AfterViewInit, ViewChild {
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  @ViewChild('myphone') phoneTitle;
  // tslint:disable-next-line:variable-name
  constructor(private elRef: ElementRef) {}

  ngOnInit() {

   }
  // call after the view finished rendering
  // Try to dom element using Jquery in Angular
  ngAfterViewInit() {
    const div = this.elRef.nativeElement.querySelector('.card-title');
    console.log(div);
    for (let i = 0; i < $('.card-title').length; i++) {
      switch (i) {
        case 0:
         $('.card-title')[i].innerHTML = 'Quan';
         break;
        case 1:
        $('.card-title')[i].innerHTML = 'Quan1';
        break;
      }
   }
  }
}
