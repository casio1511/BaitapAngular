import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

 public cardArray: { title: string, url: string , text: string }[] = [
    // tslint:disable-next-line:max-line-length
    { title: 'MACBOOK', url: '../../../assets/img/lt_macbook.png', text: 'The MacBook is a brand of notebook computers manufactured by Apple Inc'},
    // tslint:disable-next-line:max-line-length
    { title: 'ASUS ROG', url: '../../../assets/img/lt_rog.png', text: 'the Asus ROG Strix Flare is the latest addition to Asus lineup of ROG branded devices'  },
    // tslint:disable-next-line:max-line-length
    { title: 'HP OMEN', url: '../../../assets/img/lt_hp.png', text: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    // tslint:disable-next-line:max-line-length
    { title: 'LENOVO THINKPAD', url: '../../../assets/img/lt_hp.png', text: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012' }
] ;
  constructor() {}

  ngOnInit() {
   }
}
