import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.scss']
})
export class SmartphoneComponent implements OnInit {
  public cardArray: { title: string, url: string , text: string }[] = [
    // tslint:disable-next-line:max-line-length
    { title: 'iPhone X', url: '../../../assets/img/sp_iphoneX.png', text: 'iPhone X features a new all-screen design. Face ID, which makes your face your password'},
    // tslint:disable-next-line:max-line-length
    { title: 'Galaxy Note7', url: '../../../assets/img/sp_note7.png', text: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'  },
    // tslint:disable-next-line:max-line-length
    { title: 'Vivo', url: '../../../assets/img/sp_vivo850.png', text: 'A young global smartphone brand focusing on introducing perfect sound quality' },
    // tslint:disable-next-line:max-line-length
    { title: 'Blackberry', url: '../../../assets/img/sp_blackberry.png', text: 'BlackBerry is a line of smartphones, tablets, and services originally designed' }
] ;
  constructor() { }

  ngOnInit() {
  }

}
