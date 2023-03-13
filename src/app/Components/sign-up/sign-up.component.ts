import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  id=0;
  name='';
  email='';
  contact=0;
  password='';
  confirm='';
  address='';
  customer: Customer= new Customer();

  constructor( private router:Router,private customerService:CustomerServiceService) { }

  ngOnInit(): void {
}

submit(){
  if(this.password==this.confirm){
  this.customer.customerId=this.id;
  this.customer.customerName=this.name;
  this.customer.email=this.email;
  this.customer.contact=this.contact;
  this.customer.password=this.password;
  this.customer.address=this.address;
  this.customerService.addCustomer(this.customer).subscribe(data=>{
    console.log(data)
    if(data!=null){
      alert("Registered Successfully")
      this.router.navigate(['login'])
    }
    else{
      alert("Fail to register")
    }
  },error=>{
    console.log(error);
  });
  
  console.log(this.customer);
  }
}
login(){
  this.router.navigate(['login'])

}
}
