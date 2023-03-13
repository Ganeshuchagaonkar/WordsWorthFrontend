import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
id:any=0;
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  home(){
    this.router.navigate(['customer', this.id])
    }
    profile(){
    this.router.navigate(['customer/profile/', this.id])
    }
    logout(){
      this.router.navigate(['login'])
    }
    orders(){
    this.router.navigate(['orders', this.id])
    }

}
