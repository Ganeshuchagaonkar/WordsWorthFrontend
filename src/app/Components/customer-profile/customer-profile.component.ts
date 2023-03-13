import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/Models/Customer';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {
  customer: Customer = new Customer()
  constructor(private router: Router, private route: ActivatedRoute, private customerservice: CustomerServiceService) { }
  id: any = 0;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCustomerDetails()
  }
  getCustomerDetails() {
    this.customerservice.getByCustomerId(this.id).subscribe(data => {
      if (data != null) {
        this.customer=data;
      }
    },error=>{
      console.log(error)
    })
  }
  home() {
    this.router.navigate(['customer', this.id])
  }
  profile() {
    this.router.navigate(['customer/profile/', this.id])
  }
  logout() {
    this.router.navigate(['login'])
  }
  orders() {
    this.router.navigate(['orders', this.id])
  }
}
