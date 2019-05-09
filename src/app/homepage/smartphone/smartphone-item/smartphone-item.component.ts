import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-smartphone-item',
  templateUrl: './smartphone-item.component.html',
  styleUrls: ['./smartphone-item.component.scss']
})
export class SmartphoneItemComponent implements OnInit {
  @Input() myCard: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
