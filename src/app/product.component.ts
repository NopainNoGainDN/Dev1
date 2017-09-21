import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component ({
   selector: 'my-app',
   template: `Products <br>
   <a class = "button" (click) = "onBack()">Back to Inventory</a>`,
})
export   class   Appproduct  {

    constructor(private _router: Router){} 
    
       onBack(): void { 
          this._router.navigate(['/Inventory']); 
       } 
}