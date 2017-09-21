import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MultiplierPipe } from './multiplier.pipe'
import {Ng2PaginationModule} from 'ng2-pagination';
import {  ChildComponent } from './child.component';  



@NgModule ({
  imports:      [ BrowserModule,Ng2PaginationModule],
  declarations: [ AppComponent, MultiplierPipe, ChildComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


//import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';
//import { ProductFormComponent } from './product-form.component';


/*import { Appproduct } from './product.component';
import { AppInventory } from './Inventory.component';
import { PageNotFoundComponent } from  './NotFound.component'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Product', component: Appproduct },
  { path: 'Inventory', component: AppInventory },
  { path: '**', component: PageNotFoundComponent }
];*/

/*@NgModule ({
  //imports: [ BrowserModule,RouterModule.forRoot(appRoutes)],
  //declarations: [ AppComponent,Appproduct,AppInventory,PageNotFoundComponent], 
  imports: [ BrowserModule,FormsModule],
  declarations: [ AppComponent,ProductFormComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }*/



/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/