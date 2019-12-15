class Order{
constructor(
    public address: string ,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public odrderItems: OrderItem[],
    public id?: string
){}
}
class OrderItem{
    constructor(public quantity: number, public meunuId: string){}
}

export {Order, OrderItem}