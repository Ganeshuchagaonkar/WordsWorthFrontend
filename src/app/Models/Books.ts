export class Books {
    bookId:number ;
    supplierId:number;
    bookName: String;
    authorName: String;
    price: number;
    category: String;
    bookQuantity: number;
    bookAvailabilty:boolean

    constructor(){
        this.bookId= 0;
        this.supplierId= 0;
        this.bookName= '';
        this.authorName='';
        this.price=0;
        this.category='';
        this.bookQuantity=0;
        this.bookAvailabilty=true;
    }
}