//function createInvoice({phone = 3000, internet = 5500} = {}) {
function createInvoice(services = {}) {
  let payments = [];
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
  };
  invoice.total = function() {
    return this.phone + this.internet;
  };
  invoice.addPayment = function(payment) {
    payments.push(payment);
  };
  invoice.addPayments = function(payments) {
    payments.forEach(payment => this.addPayment(payment));
  };
  invoice.amountDue = function() {
    let totalDue = this.total();
    let totalPaid = paymentTotal(payments);
    return totalDue - totalPaid;
  };

  invoice.checkPayments = function() {
    console.log(payments);
  };


  return invoice;
  //return {
  //  phone,
  //  internet,
  //  total() {
  //    return this.phone + this.internet;
  //  },
  //}
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));
invoices.push(createInvoice({
  phone: 2000,
}));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));
console.log(invoiceTotal(invoices));

function paymentTotal(payments) {
  let total = 0;
  let idx;

  for (idx = 0; idx < payments.length; idx += 1) {
    total += payments[idx].total();
  }

  return total;
}

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };
  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };
  return payment;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));
payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice);
console.log(invoice.total());
invoice.checkPayments();
console.log(invoice.amountDue());       // this should return 0
