import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from 'src/app/Models/Books';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
id:any=0
val:any=0
book:Books=new Books()
  constructor(private router:Router, private route:ActivatedRoute,private bookService:BookServiceService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.val=this.route.snapshot.paramMap.get('val')
  
    this.getBookDetail()
  }
getBookDetail(){
 
this.bookService.bookById(this.val).subscribe(data=>{
  if(data!=null){
    this.book=data;
    console.log(data)
  }
},error=>{
  console.log(error)
})
}


buyNow(bookId:any){
  this.router.navigate(['placeorder/',this.id,bookId])
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
    this.router.navigate(['orders', this.id,this.val])
    }
}
