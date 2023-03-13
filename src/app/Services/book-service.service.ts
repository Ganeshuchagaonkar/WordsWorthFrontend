import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Books } from '../Models/Books';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private baseurl = 'http://localhost:8280/api';
  
  constructor(private http:HttpClient) { }

  getAllBooks(): Observable<any>{
   return this.http.get(`${this.baseurl}/books`);
  }


  bookById(id:any):Observable<Books>{
    return this.http.get<Books>(`${this.baseurl}/books/bid/${id}`)
  }
}
