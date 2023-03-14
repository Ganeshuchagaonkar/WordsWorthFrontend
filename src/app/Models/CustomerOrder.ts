export class CustomerOrder {
    orderId: Number;
    customerId: Number;
    bookId: Number;
    quantity: Number;
    totalPrice: Number
    orderDate: Date;
    paymentStatus: String;
    orderStatus: String;
    deliveryDate: Date

    constructor() {
        this.orderId = 0;
        this.customerId = 0;
        this.bookId = 0;
        this.quantity = 1;
        this.totalPrice = 0;
        this.orderDate = new Date;
        this.paymentStatus = '';
        this.orderStatus = '';
        this.deliveryDate = new Date

    }
}