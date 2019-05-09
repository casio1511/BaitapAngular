import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ItemsComponent } from './content/items/items.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    ContentComponent,
    ItemsComponent
  ],
  exports: [
    HeaderComponent,
    HomepageComponent,
    CarouselComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
