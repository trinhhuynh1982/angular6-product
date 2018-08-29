import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { AccordionBasicComponent } from './accordion-basic/accordion-basic.component';
import { AccordionStaticComponent } from './accordion-static/accordion-static.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionToggleComponent } from './accordion-toggle/accordion-toggle.component';
import { AccordionPreventChangeComponent } from './accordion-prevent-change/accordion-prevent-change.component';
import { AccordionConfigComponent } from './accordion-config/accordion-config.component';
import { IcrdcrValueComponent } from './icrdcr-value/icrdcr-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AccordionBasicComponent,
    AccordionStaticComponent,
    AccordionComponent,
    AccordionToggleComponent,
    AccordionPreventChangeComponent,
    AccordionConfigComponent,
    IcrdcrValueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
