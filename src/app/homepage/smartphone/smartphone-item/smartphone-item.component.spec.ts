import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneItemComponent } from './smartphone-item.component';

describe('SmartphoneItemComponent', () => {
  let component: SmartphoneItemComponent;
  let fixture: ComponentFixture<SmartphoneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphoneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
