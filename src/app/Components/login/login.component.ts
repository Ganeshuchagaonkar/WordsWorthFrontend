import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private Customer:CustomerServiceService) { }
 email='';
 pass=''
  ngOnInit(): void {
  }

  register(){
    this.router.navigate(['register'])
  }
  login(){

    this.Customer.getByEmail(this.email).subscribe(data=>{
      if(data!=null){
        if(data.email== this.email && data.password== this.pass){
          this.router.navigate(['customer/',data.customerId])
        }
        else{
          window.location.reload();
        }
      }
      else{
        window.location.reload()
      }
    },error=>{
      console.log(error)
    })

  }
}
