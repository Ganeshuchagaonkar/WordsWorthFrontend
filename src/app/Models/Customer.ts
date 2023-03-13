export class Customer {
    customerId:number ;
    customerName: String;
    email: String;
    password: String;
    contact: number;
    address: string

    constructor(){
        this.customerId= 0;
        this.customerName= '';
        this.email='';
        this.password='';
        this.contact=0;
        this.address='';
    }
}