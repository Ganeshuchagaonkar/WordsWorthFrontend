import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Books } from 'src/app/Models/Books';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Books[]= [];
 
  constructor(private router:Router, private route:ActivatedRoute,private bookService:BookServiceService) { }
   id:any=0;
   val:any=0
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.val=this.route.snapshot.paramMap.get('val')
   
    this.loadData()
  }
loadData(){
  this.bookService.getAllBooks().subscribe(data=>{
    this.books=data
    console.log(data)
  },error=>{
    console.log(error)
  })
}

// View Book
viewDetails(bookId:any){
  
 this.router.navigate(['/viewbook/',this.id,bookId])

}
  buyNow(bookid:any){
    this.router.navigate(['placeorder',this.id, bookid])
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
