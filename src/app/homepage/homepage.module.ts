import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    LaptopComponent,
    SmartphoneComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    LaptopComponent,
    SmartphoneComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
