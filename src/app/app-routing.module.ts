import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookLandingComponent } from './Components/book-landing/book-landing.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ViewBooksComponent } from './Components/view-books/view-books.component';

const routes: Routes = [
  {path:'',
 component:BookLandingComponent  
},
{path:'login',
component:LoginComponent  
},
{path:'register',
component:SignUpComponent  
},
{path:'customer/:id',
component:HomeComponent  
},
{
  path:'customer/profile/:id',
  component:CustomerProfileComponent
},
{path:'orders/:id',
component:OrdersComponent  
},
{path:'viewbook/:id/:val',
component:ViewBooksComponent  
},
{path:'placeorder/:id/:val',
component:PlaceOrderComponent  
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
