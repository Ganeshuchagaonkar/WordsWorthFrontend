import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookLandingComponent } from './Components/book-landing/book-landing.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewBooksComponent } from './Components/view-books/view-books.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';


@NgModule({
  declarations: [
    AppComponent,
    BookLandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    OrdersComponent,
    CustomerProfileComponent,
    ViewBooksComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BackButtonDisableModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
