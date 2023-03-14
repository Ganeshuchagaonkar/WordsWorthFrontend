import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerOrder } from 'src/app/Models/CustomerOrder';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
id:any=0;
orderlist:CustomerOrder[]=[];

  constructor(private router:Router, private route:ActivatedRoute,private orderservice:OrderServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.load() 
  }
load(){
  this.orderservice.getOrderById(this.id).subscribe(data=>{
    console.log(data);
    this.orderlist=data;
  })
}
   home(){
    this.router.navigate(['customer', this.id])
  }
    profile(){
    this.router.navigate(['customer/profile', this.id])
    }
    logout(){
      this.router.navigate(['login'])
    }
    orders(){
    this.router.navigate(['orders', this.id])
    }

}
