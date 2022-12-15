let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {              
        return 0;           
      }                     
    }
   //    let specialDiscount = () => {
   //      if (this.price > 20000) {                              
   //        return 1000;             //        return 0;
                                       //      }
 //      } else {                     //    };

//    let specialDiscount = function() {
//      if (this.price > 20000) {
//        return 1000;
//      } else {
//        return 0;
//      }
//    }.bind(this);
    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer.total());
