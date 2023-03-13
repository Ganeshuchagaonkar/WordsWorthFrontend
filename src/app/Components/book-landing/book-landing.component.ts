import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/Models/Books';
import { BookServiceService } from 'src/app/Services/book-service.service';

@Component({
  selector: 'app-book-landing',
  templateUrl: './book-landing.component.html',
  styleUrls: ['./book-landing.component.css']
})
export class BookLandingComponent implements OnInit {
  books: Books[]= [];
  constructor(private bookService:BookServiceService, private router:Router) { }

  ngOnInit(): void {
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

  login(){
    this.router.navigate(['login'])
  }

}
