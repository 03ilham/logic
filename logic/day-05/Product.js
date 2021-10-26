 export default class product {
  constructor(prodId, prodName, category, price=0, jmlBeli=1) {
    this.prodId = prodId;
    this.prodName = prodName;
    this.category = category;
    this.price = price;
    this.jmlBeli = jmlBeli;
    this.subTotal = this.price * this.jmlBeli;
  }

  toStirng() {
    return `Product Id   =  ${this.prodId}
            Product Name =  ${this.prodName}
            Category     =  ${this.category}
            Price        =  ${this.price}
            Jumlah Beli  =  ${this.jmlBeli}
            Sub Total    =  ${this.subTotal}`
  }

  setPrice(price){
    this.price = price;
    return this.subTotal = this.price * this.jmlBeli;
  }

  setPriceJmlBeli(price,jmlBeli){
    this.price = price;
    this.jmlBeli = jmlBeli;
    return this.subTotal = this.price * this.jmlBeli;
  }
  
}





