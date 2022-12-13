'use strict';
let invoices = {
  unpaid: [],
  paid: [],

  add(client, due) {
    this.unpaid.push({ client, due, });
  },

  totalDue() {
    return this.unpaid.reduce((sum, client) => sum + client.due, 0);
  },
  // Loop through the unpaid invoices
  // if the name matches, push the invoice to paid
  // if the name doesn't match, push the invoice to a new local array
  // at end, side effect replaces unpaid with new array
  payInvoice(client) {
    this.unpaid = this.unpaid.filter(invoice => {
      if (client === invoice.client) {
        this.paid.push(invoice);
      }
      return !(client === invoice.client);
    });
  },

  totalPaid() {
    let total = this.paid.reduce((sum, invoice) => sum + invoice.due, 0);
    return total;
  },

};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.unpaid);
console.log(invoices.totalDue());
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.unpaid);
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
