import { 
  Component 
} from '@angular/core';  

import { 
  appService 
} from './app.service';  

@Component ({ 
  selector: 'my-app', 
  template: '<div>{{value1}}</div>', 
  providers: [appService] 
}) 

export class AppComponent { 
  value1: string = ""; 
  value2: string = ""; 
  constructor(private _appService: appService) { }  

  ngOnInit(): void { 
     this.value1 = this._appService.getApp(); 
     this.value2 = this.value +this._appService.getApp(); 
  } 
}


/*import { 
  Component 
} from '@angular/core'; 

import { 
  ChildComponent 
} from './child.component'; 

@Component ({ 
  selector: 'my-app', 
  template: '<child-app></child-app> ' 
}) 

export class AppComponent { }

*/

/*import { 
  Component 
} from '@angular/core';  

@Component ({ 
  selector: 'my-app', 
  template: '<div> {{values}} </div> ' 
}) 

export class AppComponent { 
  values = ''; 
  ngOnInit() { 
     this.values = "Hello"; 
  } 
}*/



/*import {
  Component
} from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `<button (Click) = "onClickMe()"> Click Me </button> {{clickMessage}}`
})

export class AppComponent {
  clickMessage ='Hello';
  onClickMe() {
     this.clickMessage = 'This Tutorial!';
  }
}*/

/*import { 
  Component 
} from '@angular/core';  

@Component ({ 
  selector: 'my-app', 
  template: '<p>Multiplier : {{2 | Multiplier: "100"}}</p>' 
}) 
export class AppComponent {  } */


/*import { 
  Component 
} from '@angular/core';  

@Component ({ 
  selector: 'my-app', 
  templateUrl: './app.component.html' 
}) 

export class AppComponent { 
  newValue: number = 0.3;
  //newValue: number = 30; 
  //newValue: number = 123; 
} */



/*import { 
  Component 
} from '@angular/core';  

@Component ({ 
  selector: 'my-app', 
  templateUrl: './app.component.html' 
}) 

export class AppComponent { 
  newdate = new Date();
}
*/


/*import { 
  Component 
} from '@angular/core';  

@Component ({ 
  selector: 'my-app', 
  templateUrl: './app.component.html' 
}) 

export class AppComponent { 
  Status: boolean = true; 
  clicked(event) { 
     this.Status = false; 
  } 
}*/


/*import {
  Component
} from '@angular/core';

@Component ({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  TutorialName: string = 'Angular JS2';
  appList: string[] = ["Binding", "Display", "Services"];
}*/




/*import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  templateUrl: '/app.component.html'
})

export class AppComponent {
  appTitle: string = 'Welcome';
  
  appList: any[] = [{
     "ID": "1",
     "Name": "One",
     "url": 'app/Images/One.jpg'
  },
  {
     "ID": "2",
     "Name": "Two",
     "url": 'app/Images/Two.jpg'
  }];
}*/



/*import { Component } from '@angular/core';
import {PaginatePipe, PaginationService} from 'ng2-pagination';

@Component ({
   selector: 'my-app',
   template: ` 
   <ul>
   <li *ngFor = "let item of collection | paginate: {
      itemsPerPage: 5, currentPage: p }"> ... </li>
   </ul>
   <pagination-controls (pageChange) = "p = $event"></pagination-controls>`
})
export class AppComponent { }*/








/*import { Component } from '@angular/core';
import { appService } from './products.service';  

@Component({ 
  selector: 'my-app', 
  template: '<div>{{value}}</div>', 
  providers: [appService]  
}) 

export class AppComponent { 
  value: string = ""; 
  constructor(private _appService: appService) { } 
  ngOnInit(): void { 
     this.value = this._appService.getApp(); 
  }
}
*/


/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}*/

//import { Component } from '@angular/core';
//import { IProduct } from './iProducts';
//import { ProductService } from './products.service';
//import { appService } from './app.service';
//import { Http , Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
/*
@Component ({
   selector: 'my-app',
   template: '<product-form></product-form>',
   // providers: [ProductService]
})

export   class   AppComponent  {
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }*/

