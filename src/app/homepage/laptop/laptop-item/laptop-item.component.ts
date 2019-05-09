import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.scss']
})
export class LaptopItemComponent implements OnInit {
  @Input() myCard: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
