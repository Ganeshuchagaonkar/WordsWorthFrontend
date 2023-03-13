import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/Models/Books';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor( private router:Router, private route:ActivatedRoute, private bookservice:BookServiceService) { }
 id:any=0;
 book:Books=new Books
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.getBookById();
  }
 getBookById(){
this.bookservice.bookById(this.id).subscribe(data=>{
  if(data!=null){
    this.book=data;
  }
},error=>{
  console.log(error)
})
 }
  placeOrder(){

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
