import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Models/Customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  private baseurl = 'http://localhost:8280/api';

  constructor(private http:HttpClient) { }
  addCustomer(customer:Customer):Observable<Customer>{
    return this.http.post<Customer>(`${this.baseurl}/customers/add`,customer);
  }

  getByEmail(email:any):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseurl}/customer/email/${email}`)
  }

  getByCustomerId(id:any):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseurl}/customer/${id}`)
  }
}
