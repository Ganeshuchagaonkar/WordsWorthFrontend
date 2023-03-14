import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../Models/CustomerOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private baseurl = 'http://localhost:8280/api/orders';
  constructor(private http:HttpClient) { }

postOrders(order:CustomerOrder):Observable<CustomerOrder>{
  console.log(order)
  return this.http.post<CustomerOrder>(`${this.baseurl}/post`, order);
}

getOrderById(custd:any):Observable<any>{
  return this.http.get(`${this.baseurl}/customer/${custd}`)
}



}
