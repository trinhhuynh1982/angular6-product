import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AccordionBasicComponent } from './accordion-basic/accordion-basic.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionStaticComponent } from './accordion-static/accordion-static.component';
import { AccordionToggleComponent } from './accordion-toggle/accordion-toggle.component';
import { AccordionPreventChangeComponent } from './accordion-prevent-change/accordion-prevent-change.component';
import { AccordionConfigComponent } from './accordion-config/accordion-config.component';
import { IcrdcrValueComponent } from './icrdcr-value/icrdcr-value.component';

const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    {
        path: 'accordion',
        component: AccordionComponent,
        children:[
            {
              path: "basic",
              component: AccordionBasicComponent
            },
            {
              path: "static",
              component: AccordionStaticComponent
            },
            {
                path: "toggle",
                component: AccordionToggleComponent
            },
            {
                path: "prenvent-change",
                component: AccordionPreventChangeComponent
            },
            {
                path: 'config',
                component: AccordionConfigComponent 
            }
          ]
    },
    {
        path: 'simple',
        component: IcrdcrValueComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
