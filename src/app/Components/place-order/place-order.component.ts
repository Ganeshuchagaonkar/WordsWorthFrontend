import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/Models/Books';
import { CustomerOrder } from 'src/app/Models/CustomerOrder';
import { BookServiceService } from 'src/app/Services/book-service.service';
import { OrderServiceService } from 'src/app/Services/order-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor( private router:Router, private route:ActivatedRoute, private bookservice:BookServiceService, private orderservice:OrderServiceService) { }
   id:any=0;
  val:any = 0;
  quantity=1;
  order:CustomerOrder= new CustomerOrder();
  book:Books=new Books
  //customerId:any;
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    

    //book id
    this.val = this.route.snapshot.paramMap.get('val');
    this.getBookById();
  }
 getBookById(){
this.bookservice.bookById(this.val).subscribe(data=>{
  if(data!=null){
    this.book=data;
  }
},error=>{
  console.log(error)
})
 }
placeOrder(bookId:any,price:any){
  // alert("Sure you want to confirm the order")
    this.order.totalPrice=this.quantity*price;
    //alert(this.order.totalPrice);
    this.order.bookId=bookId;
    let custId=parseInt(this.id)
    this.order.customerId=custId
    //alert(this.order.customerId)
    this.order.quantity=this.quantity;
    this.order.orderStatus="Confirm";
    this.order.paymentStatus="Pending";
    

    this.orderservice.postOrders(this.order).subscribe(data=>{
      console.log(data)
     alert("Order Placed Successfully")
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
